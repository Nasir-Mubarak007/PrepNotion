import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { User, onAuthStateChanged } from "firebase/auth";

import LoginScreen from "../screens/LoginScreen";
import { FIREBASE_AUTH } from "../firebase";

import SignupScreen from "../screens/SignupScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import ForgotPassword from "../screens/ForgotPassword";
import AuthenticatedStack from "./AuthenticatedStack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [firstLaunch, setFirstLaunch] = useState(null);
  // const [user, setUser] = useState(User || null);

  // useEffect(() => {
  //   onAuthStateChanged(
  //     FIREBASE_AUTH,
  //     (user) => {
  //       console.log("user", user);
  //       setUser(user);
  //     },
  //     []
  //   );
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if ((value = null)) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (firstLaunch === null) {
    return;
  } else if (firstLaunch === true) {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
      </Stack.Navigator>
    );
  }
};

export default StackNavigator;
