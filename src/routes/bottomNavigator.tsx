import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";
import { colors } from "../helper/helpers";
import HomeIcon from "../../assets/homes.png"; // Import your image
import SearchIcon from "../../assets/search.png"
import notfiIcon from "../../assets/notif.png"
import smsIcon from "../../assets/sms.png"
import settings from "../../assets/Variant8.png"
import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/home/SearchScreen";
import NotificationScreen from "../screens/home/NotificationScreen";
import SmsScreen from "../screens/home/SmsScreen";
import AccountScreen from "../screens/home/AccountScreen";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center space-y-1 mt-1 ">
              <Image
                source={HomeIcon} // Use the imported image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.theme : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center space-y-2 mt-1 ">
              <Image
                source={SearchIcon} // Use the imported image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.theme : "black",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name=" OrderHistoryScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center space-y-2 mt-1 ">
              <Image
                source={notfiIcon} // Use the imported image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.theme : "black",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DealScreen"
        component={SmsScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View className="items-center space-y-2 mt-2 ">
              <Image
                source={smsIcon} // Use the imported image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.theme : "black",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AccountScreen "
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center space-y-1 mt-2">
              <Image
                source={settings} // Use the imported image
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: "white",
    height: 80,
    padding: 10,
  },
});

export default BottomNavigator;
