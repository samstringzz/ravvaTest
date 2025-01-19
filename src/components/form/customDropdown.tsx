import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import { Iconify } from 'react-native-iconify';
import { colors } from '../../helper/helpers';
import Modal from 'react-native-modal';
import { useController } from 'react-hook-form';
import ErrorMessage from './errorMessage';
import { styles } from '../../helper/globalStyle';


interface Props {
    name: string,
    control: any,
    options: { label: string | number, value: string | number }[];
    handleOnChange?: (value: any) => void,
    defaultValue?: string | number,
    placeholder: string
}


const CustomDropDownSelect: FC<Props> = ({
    name,
    control,
    options,
    handleOnChange,
    defaultValue,
    placeholder
}) => {

    const [value, setValue] = useState<string | number>(defaultValue || "")

    const { field, fieldState } = useController({
        name,
        control,
    });

    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (selectedOption: { value: string | number, label: string | number }) => {
        field.onChange(selectedOption.value);
        setValue(selectedOption.label);
        if (handleOnChange) {
            handleOnChange(selectedOption.value);
        }
        handleHide();
    }

    const handleShow = () => {
        setIsVisible(true);
    }

    const handleHide = () => {
        setIsVisible(false);
    }





    return (
        <View className='space-y-1.5'>
            <TouchableOpacity
                onPress={handleShow}
                className={`border border-input-border-gray rounded-lg h-12 px-3 justify-between flex-row items-center ${isVisible ? styles.inputFocused : null}`}
            >
                <Text className={`font-sr ${!value && "text-[#0A4751] capitalize"}`}>{value || placeholder}</Text>

                <Iconify icon='iconamoon:arrow-down-2-duotone' size={20} color={colors.label} />
            </TouchableOpacity>

            <Modal
                isVisible={isVisible}
                onBackdropPress={handleHide}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={{ margin: 0, bottom: 0 }}
            >
                <View className="w-full bg-white bottom-0 absolute rounded-t-2xl px-4 py-6 max-h-[50vh] space-y-4">
                    <Text className="font-sm">Select Option</Text>

                    <FlatList
                        data={options}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelect(item)} className="h-12 bg-gray-bg rounded-lg px-3 justify-center items-center">
                                <Text className="font-sr text-xs">{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>

            <View>
                {fieldState.error && <ErrorMessage message={fieldState.error.message} />}
            </View>
        </View>
    )
}

export default CustomDropDownSelect