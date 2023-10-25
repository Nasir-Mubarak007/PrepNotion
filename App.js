import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { User, onAuthStateChanged } from "firebase/auth";

import StackNavigator from "./src/navigation/Stack";
import AuthenticatedStack from "./src/navigation/AuthenticatedStack";
import { FIREBASE_AUTH } from "./src/firebase";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(User || null);

  useEffect(() => {
    onAuthStateChanged(
      FIREBASE_AUTH,
      (user) => {
        console.log("user", user);
        setUser(user);
      },
      []
    );
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        {user ? <AuthenticatedStack /> : <StackNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
}
