import { View, Text, ActivityIndicator, Alert } from "react-native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../auth/AuthContext";
import { colors } from "../helper/helpers";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import SignInScreen from "../screens/onboarding/SignInScreen";
import HomePage from "../screens/home/ClassroomPage";
import MyTab from "./MyTab";
import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/home/SearchScreen";
import  BottomNavigator from "./bottomNavigator"
import PostScreen from "../screens/home/PostScreen";
import ExistingPostScreen from "../screens/home/ExistingPostsScreen";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const RootNavigation = () => {
  const { authState } = useAuth();

  if (authState === null) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color={colors.theme} size={24} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="auto" />

      <Stack.Navigator
        initialRouteName={
          authState?.isAuthenticated ? "Dashboard" : "Dashboards"
        }
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* //Auth Screen */}
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Dashboards" component={BottomNavigator} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="ExistingPostScreen" component={ExistingPostScreen} />
        <Stack.Screen name="Dashboard" component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
