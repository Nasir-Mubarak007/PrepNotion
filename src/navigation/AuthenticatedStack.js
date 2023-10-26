import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Backend from "../components/categories/pages/Backend";
import DataBase from "../components/categories/pages/DataBase";
import Categories from "../screens/categoriesScreen";
import Data from "../components/categories/pages/Data";
import Education from "../components/categories/pages/Education";
import ExamMode from "../components/home/pages/ExamMode";
import Home from "../screens/homeScreen";
import Program from "../components/categories/pages/program";
import StudyMode from "../components/home/pages/StudyMode";
import Uiux from "../components/categories/pages/Uiux";
import AllExams from "../screens/allExams";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="Feed"
      activeColor="black"
      inactiveColor="#1B1C1E"
      barStyle={{ height: 65 }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => {
            focused;
            return (
              <MaterialCommunityIcons
                name="home"
                size={20}
                color={color}
                focused={true}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="categories"
        component={Categories}
        options={{
          title: "categories",
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, focused }) => {
            focused;
            return (
              <MaterialCommunityIcons
                name="shape-plus"
                size={20}
                color={color}
                focused={true}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="allExams"
        component={AllExams}
        options={{
          title: "allExams",
          tabBarLabel: "allExams",
          tabBarIcon: ({ color, focused }) => {
            focused;
            return (
              <MaterialCommunityIcons
                name="book-outline"
                size={20}
                color={color}
                focused={true}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ExamMode" component={ExamMode} />
      <Stack.Screen name="StudyMode" component={StudyMode} />
      <Stack.Screen name="UI/UX" component={Uiux} />
      <Stack.Screen name="Backend" component={Backend} />
      <Stack.Screen name="dataAnalyst" component={Data} />
      <Stack.Screen name="dataBase" component={DataBase} />
      <Stack.Screen name="education" component={Education} />
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Programing" component={Program} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
