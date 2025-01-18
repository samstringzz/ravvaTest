import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { colors } from "../helper/helpers";
import pips from "../../assets/pips.png";
import fitness from "../../assets/fitness.png";
import dot from "../../assets/dot.png";
import love from "../../assets/favorite.png";
import chat from "../../assets/chat.png";
import books from "../../assets/books.png";

interface PostProps {
  avatar: any; // Replace 'any' with the appropriate type if known (e.g., ImageSourcePropType)
  username: string;
  time: string;
  content: string;
  images: any[]; // Replace 'any' with the appropriate type if known
  likes: number;
  comments: number;
  imageWidth: number;
  imageHeight: number;
}

const Post: React.FC<PostProps> = ({ avatar, username, time, content, images, likes, comments,  imageWidth, imageHeight }) => {
  return (
    <View
      className="space-y-5 px-4 pb-5 border-b"
      style={{ borderBottomColor: "rgba(17, 16, 16, 0.12)" }}
    >
      <View className="flex-row">
        <View>
          <Image source={avatar} style={{ width: 40, height: 40 }} />
        </View>
        <View className="flex-column px-4">
          <View className="mt-1 flex-row justify-between">
            <View className="flex-row">
              <Text className="font-sd text-[15px]" style={{ marginRight: 5 }}>
                {username}
              </Text>
              <Text style={{ marginRight: 5 }}>·</Text>
              <Text className="font-sr text-[#16171DB2]">{time}</Text>
            </View>
            <View className="flex-row items-center pr-8">
              <Image source={pips} style={{ width: 24, height: 24, marginRight: 8 }} />
              <Image source={fitness} style={{ width: 51, height: 18, marginRight: 8 }} />
              <Image source={dot} style={{ width: 17, height: 19 }} />
            </View>
          </View>
          <View className="pr-8">
            <Text className="font-sr text-[15px] mt-2">{content}</Text>
          </View>
          <View className="space-y-5">
            <FlatList
              data={images}
              renderItem={({ item }) => (
                <View className="mt-3">
                  <Image source={item} style={{ width:  imageWidth, height: imageHeight, marginRight: 10 }} />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View className="flex-row mt-3">
            <View className="flex-row" style={{ marginRight: 20 }}>
              <Image source={love} style={{ width: 17, height: 19 }} />
              <Text style={{ marginLeft: 5 }}>{likes}</Text>
            </View>
            <View className="flex-row" style={{ marginRight: 20 }}>
              <Image source={chat} style={{ width: 17, height: 19 }} />
              <Text style={{ marginLeft: 5 }}>{comments}</Text>
            </View>
            <View className="flex-row">
              <Image source={books} style={{ width: 17, height: 19 }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post; 