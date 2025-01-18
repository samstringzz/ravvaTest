import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import box from "../../../assets/fi_x.png";
import logo from "../../../assets/splashs.png";
import sort from "../../../assets/instant.png";
import Button from "../../components/elements/button";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../../assets/avatar.png";
import crown from "../../../assets/crown.png";
import { serviceType } from "../../helper/helpers";
import { storeType } from "../../helper/helpers";
import CustomDropDownSelect from "../../components/form/customDropdown";
import { useForm } from "react-hook-form";
import video from "../../../assets/video.png";
import camera from "../../../assets/camera.png";
import pic from "../../../assets/picture.png";
import mic from "../../../assets/mic.png";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useAppDispatch } from "../../redux/store";

const PostScreen = () => {
  const navigation = useNavigation<any>();
  const { control, watch } = useForm();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [textInput, setTextInput] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]); // URIs
  const [loading, setLoading] = useState(false);


  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You need to enable camera permissions to take a photo!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedMedia((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You need to enable gallery permissions to select an image!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 0,
    });

    if (!result.canceled) {
      setSelectedMedia((prev) => [
        ...prev,
        ...result.assets.map((asset) => asset.uri),
      ]);
    }
  };

  const checkFileExists = async (uri: string) => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(uri);
      if (fileInfo.exists) {
        console.log("File exists:", fileInfo.uri);
      } else {
        console.log("File does not exist:", uri);
      }
    } catch (error) {
      console.error("Error checking file existence:", error);
    }
  };

  return (
    <View className="flex-1">
      <View className="h-12 bg-white w-full" />
      <View className="space-y-2 flex-1">
        <View
          className="space-y-5 px-4 pb-3 border-b"
          style={{ borderBottomColor: "rgba(17, 16, 16, 0.12)" }}
        >
          <View className="flex-row justify-between mt-5 items-center">
            <TouchableOpacity onPress={() => navigation.navigate("Dashboards")}>
              <Image source={box} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>

            <Text className="font-sm text-[18px] text-[#111010]">
              Exclusive Post
            </Text>
            <View className="w-[20%]">
              <Button title="Post" variant="faded" />
            </View>
          </View>
        </View>
        <View className="space-y-5 px-4">
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Image source={avatar} style={{ width: 40, height: 40 }} />
              <Text className="ml-3 font-sm">@Fvivian</Text>
            </View>
            <View className="flex-row items-center">
              <Image
                source={crown}
                style={{ width: 28, height: 28, marginRight: 10 }}
              />
              <CustomDropDownSelect
                placeholder={"Select category tag"}
                name={"store_type"}
                control={control}
                options={storeType}
              />
            </View>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 10,
              width: "100%",
              height: 150,
            }}
            placeholder="Type your message here..."
            multiline={true}
          />

          {selectedMedia.length > 0 && (
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {selectedMedia.map((uri, index) => (
                <Image
                  key={index}
                  source={{ uri }}
                  style={{
                    width: 140,
                    height: 157,
                    borderRadius: 8,
                    margin: 5,
                  }}
                />
              ))}
            </View>
          )}
          <View className="flex-row">
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={video}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePhoto}>
              <Image
                source={camera}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={pic}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            </TouchableOpacity>
            <Image
              source={mic}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
