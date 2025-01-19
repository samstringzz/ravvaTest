import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
// import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from "react";
import { colors } from "../../helper/helpers";
import box from "../../../assets/sort.png";
import logo from "../../../assets/splashs.png";
import sort from "../../../assets/instant.png";
import adh from "../../../assets/AD21-13.png";
import avatar from "../../../assets/avatar.png";
import pips from "../../../assets/pips.png";
import fitness from "../../../assets/fitness.png";
import dot from "../../../assets/dot.png";
import food from "../../../assets/food.png";
import love from "../../../assets/favorite.png";
import chat from "../../../assets/chat.png";
import books from "../../../assets/books.png";
import biz from "../../../assets/bizzz.png"
import nini from "../../../assets/nini.png"
import Post from "../../components/Post";
import aaa from "../../../assets/aaaa.png"
import ass from "../../../assets/ass.png"
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleButtonPress = () => {};
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1">
      <View className="h-12 bg-white w-full" />
      <View className="space-y-2 flex-1">
        <View className="space-y-5 px-4">
          <View className="flex-row justify-between mt-5 ">
            <Image source={box} style={{ width: 24, height: 24 }} />
            <Image source={logo} style={{ width: 33, height: 27 }} />
            <Image source={sort} style={{ width: 24, height: 24 }} />
          </View>
        </View>
        <View
          className="space-y-5 px-4 pb-3 border-b"
          style={{ borderBottomColor: "rgba(17, 16, 16, 0.12)" }}
        >
          <View className="mt-5 flex-row justify-between">
            <TouchableOpacity onPress={() => navigation.navigate('ExistingPostScreen')}>
              <Text className="text-lg font-bold">For You</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PostScreen')}>
              <Text>Post a Post</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          className="space-y-5 pl-4 pb-5 border-b"
          style={{ borderBottomColor: "rgba(17, 16, 16, 0.12)" }}
        >
          <FlatList
            data={[adh, adh]}
            renderItem={({ item }) => (
              <View className="mt-3">
                <Image
                  source={item}
                  style={{ width: 326, height: 123, marginRight: 10 }}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <Post
              avatar={avatar}
              username="@Fvivian"
              time="3mins"
              content="A big shoutout to all the jollof rice lovers who know that Nigerian jollof reigns supreme! While others may have their own taste preferences, we proudly claim our jollof as the king of flavors! 🍚👑"
              images={[food, food]}
              likes={12}
              comments={12}
              imageWidth={298}
              imageHeight={334}
            />
            <View className="space-y-5 px-4 mt-2">
              <View className="flex-row justify-between px-4">
                <Text className="text-[#111010] font-sd">Creators for you</Text>
                <Text className="text-[#0A4751] font-sm">See more</Text>
              </View>
              <View
                className="space-y-5 pl-4 pb-5 border-b"
                style={{ borderBottomColor: "rgba(17, 16, 16, 0.12)" }}
              >
                <FlatList
                  data={[biz, nini, biz, nini]}
                  renderItem={({ item }) => (
                    <View >
                      <Image
                        source={item}
                        style={{ width: 170, height: 247, marginRight: 10 }}
                      />
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            <Post
              avatar={avatar}
              username="@Fvivian"
              time="3mins"
              content="A big shoutout to all the jollof rice lovers who know that Nigerian jollof reigns supreme! While others may have their own taste preferences, we proudly claim our jollof as the king of flavors! 🍚👑"
              images={[aaa]}
              likes={12}
              comments={12}
              imageWidth={298}
              imageHeight={283}
            />
             <Post
              avatar={avatar}
              username="@Fvivian"
              time="3mins"
              content="A big shoutout to all the jollof rice lovers who know that Nigerian jollof reigns supreme! While others may have their own taste preferences, we proudly claim our jollof as the king of flavors! 🍚👑"
              images={[ass, ass]}
              likes={12}
              comments={12}
              imageWidth={298}
              imageHeight={334}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
