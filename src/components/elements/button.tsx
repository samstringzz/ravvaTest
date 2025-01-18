import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import React from 'react'
import clsx from 'clsx'


interface Props {
    variant?: "primary" | "outline" | "outlineTheme" | "danger" | "gray" | "faded" | "orange" | "lightGray" | "black" | "cancel",
    size?: "md" | "sm"
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    textClassName?: "primary" | "outline" | "outlineTheme" | "danger" | "gray" | "faded" | "orange" | "lightGray" | "black" | "cancel",
    isLoading?: boolean,
    classNames?: string,
    title: string,
    onPress?: () => void,
    disabled?: boolean,
    loaderColor?: string
}

const Button = ({ variant = "primary", size = "md", startIcon, textClassName = "primary", endIcon, isLoading = false, classNames, title, onPress, disabled, loaderColor = "white" }: Props) => {

    const variants = {
        primary: 'bg-theme',
        outline: 'bg-white border border-theme-black',
        outlineTheme: 'bg-white border border-theme',
        danger: 'bg-danger bg-opacity-10 text-danger',
        cancel: 'bg-[#FFFFFF] bg-opacity-10 text-cancel border border-[#EA1D27]',
        gray: 'bg-input-border-gray text-secondary',
        faded: "bg-[#0A4751] text-theme",
        orange: "bg-theme-orange text-theme-black",
        lightGray: "bg-gray-bg text-secondary",
        black: "bg-theme-black text-white"
    }

    const textVariant = {
        primary: "text-white",
        outline: "text-theme-black",
        outlineTheme: "text-theme",
        danger: 'text-white',
        cancel: 'text-[#EA1D27]',
        gray: 'text-secondary',
        faded: "text-[#FFFFFF]",
        orange: "text-theme-black",
        lightGray: "text-secondary",
        black: "text-white"
    }

    const sizes = {
        md: 'px-4 h-12',
        sm: 'px-4 h-9',
    }


    return (
        <View>
            <TouchableOpacity onPress={onPress} disabled={disabled} className={clsx("flex-row items-center justify-center w-full space-x-3 rounded-lg", variants[variant], sizes[size], classNames)}
            >
                {isLoading && <ActivityIndicator color={loaderColor} size={24} />}
                {!isLoading && startIcon}
                <Text className={clsx("font-sr", (startIcon || endIcon) && "mt-0.5", textVariant[variant], textClassName)}>{title}</Text>
                {endIcon}
            </TouchableOpacity>
        </View>
    )
}

export default Button