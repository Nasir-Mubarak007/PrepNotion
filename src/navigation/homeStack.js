import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/bottomNavigation/home";
import StudyMode from "../components/home/pages/StudyMode";
import ExamMode from "../components/home/pages/ExamMode";
import CategoriesTab from "./categoriesStack";

const Tabs = createStackNavigator();

const HomeTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="home"
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="ExamMode" component={ExamMode} />
      <Tabs.Screen name="StudyMode" component={StudyMode} />
      {/* <Tabs.Screen name="categories" component={CategoriesTab} /> */}
    </Tabs.Navigator>
  );
};

export default HomeTab;
