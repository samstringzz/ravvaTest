import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import Teams from "../screens/home/Teams";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getUserProfile } from "../redux/auth/features";
import ClassroomPage from "../screens/home/ClassroomPage";
import SchedullingScreen from "../screens/home/SchedullingScreen";
import StudentsScreen from "../screens/home/StudentsScreen";
import AttendanceScreen from "../screens/home/AttendanceScreen";

export default function MyTab() {
  const Tab = createBottomTabNavigator();
  // const { user } = useAppSelector((state) => state.auth)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //     dispatch(getUserProfile())
  // }, [])


  // console.log('user: ', user)


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === "ClassroomPage") {
            iconName = "swimmer";
            label = "Classroom";
          } else if (route.name === "Schedulling") {
            iconName = "calendar";
            label = "Schedules";
          } else if (route.name === "Students") {
            iconName = "chart-line";
            label = "Students";
          } else if (route.name === "Attendance") {
            iconName = "users";
            label = "Attendance";
          } 

          return (
            <View style={[focused ? styles.active : styles.inActive]}>
              <FontAwesome5
                name={iconName}
                size={18}
                color={`${focused ? "black" : "white"}`}
              />
              {focused && (
                <Text
                  style={{
                    color: "black",
                    marginLeft: 3,
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  {label}
                </Text>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          marginHorizontal: 24,
          marginBottom: 24,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          paddingTop: 8,
          paddingBottom: 8,
          height: 66,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="ClassroomPage" component={ClassroomPage} />
      <Tab.Screen name="Schedulling" component={SchedullingScreen} />
      <Tab.Screen name="Students" component={StudentsScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
    
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },

  inActive: {
    flexDirection: "row",
    alignItems: "center",
  },
});
