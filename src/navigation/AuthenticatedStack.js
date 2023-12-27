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
import CustomNavigationBar from "../components/CustomNavigationBar";
import ProfileScreen from "../screens/profileScreen";
import { Avatar } from "react-native-paper";
import Jamb from "../components/Exams/Jamb";
import Nabteb from "../components/Exams/Nabteb";
import Waec from "../components/Exams/Waec";
import Neco from "../components/Exams/Neco";
import Info from "../components/profile/Info";
import Courses from "../components/Courses";
import Increase from "../components/profile/Increase";
import BuyPoints from "../components/profile/BuyPoints";
import Security from "../components/profile/Security";
import ChangePassword from "../components/profile/ChangePassword";
import ExamsMode from "../components/Exams/ExamMode/ExamsMode";
import StudyMode2 from "../components/Exams/StudyMode/StudyMode";
import ExamsMode2 from "../components/Exams/ExamMode/ExamsMode2";
import Questionz from "../components/Exams/ExamMode/Question";
import Years from "../components/Years";
import ResultsPage from "../components/ResultsPage";

import { FIREBASE_AUTH } from "../firebase";

const auth = FIREBASE_AUTH;
const user = auth.currentUser;

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="home"
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
          tabBarLabel: "Exams",
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
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => {
            focused;
            return (
              // <MaterialCommunityIcons
              //   name="book-outline"
              //   size={20}
              //   color={color}
              //   focused={true}
              // />
              <Avatar.Image
                size={24}
                source={{uri:user?.photoURL}||require("../assets/images/avatar.png")}
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
    <Stack.Navigator
      screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="buy"
        component={BuyPoints}
        options={{ title: "Buy Points" }}
      />
      <Stack.Screen name="Backend" component={Backend} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DataAnalyst"
        component={Data}
        options={{ title: "Data Analysis" }}
      />
      <Stack.Screen
        name="ExamMode"
        component={ExamMode}
        options={{ title: "Exam Mode" }}
      />
      <Stack.Screen name="UI/UX" component={Uiux} />
      <Stack.Screen
        name="JAMB"
        component={Jamb}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudyMode"
        component={StudyMode}
        options={{ title: "Study Mode" }}
      />
      <Stack.Screen
        name="examsMode"
        component={ExamsMode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="studyMode"
        component={StudyMode2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="years"
        component={Years}
        options={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      />
      <Stack.Screen
        name="startExam"
        component={ExamsMode2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="question"
        component={Questionz}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NABTEB"
        component={Nabteb}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WAEC"
        component={Waec}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NECO"
        component={Neco}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="info"
        component={Info}
        options={{
          title: "My Information",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="results"
        component={ResultsPage}
        options={{
          title: "Results",
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{
          title: "Security",
        }}
      />

      <Stack.Screen
        name="DataBase"
        component={DataBase}
        options={{ title: "Database" }}
      />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Programing" component={Program} />
      <Stack.Screen
        name="increase"
        component={Increase}
        options={{ title: "Increase Points" }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
