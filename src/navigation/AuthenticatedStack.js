import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/home";
import ExamMode from "../components/home/pages/ExamMode";
import StudyMode from "../components/home/pages/StudyMode";
import Categories from "../screens/categories";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AuthenticatedStack = () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName="Home"
    // >
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="categories" component={CategoriesTab} />
    //   <Stack.Screen name="home" component={HomeTab} />
    //   {/* <Stack.Screen name="home" component={Home} />
    //   <Stack.Screen name="ExamMode" component={ExamMode} />
    //   <Stack.Screen name="StudyMode" component={StudyMode} /> */}
    // </Stack.Navigator>
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      inactiveColor="#1B1C1E"
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Homes",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" size={20} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="categories" component={Categories} />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
