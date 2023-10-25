import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "../components/bottomNavigation/categories";
import Education from "../components/categories/pages/Education";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const CategoriesTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        //   initialRouteName="categories"
      >
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="education" component={Education} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CategoriesTab;
