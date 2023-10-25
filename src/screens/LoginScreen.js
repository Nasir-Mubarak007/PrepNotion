import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";
import PswrdForm from "../components/forgotPswd/PswdForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Frame.png")}
        style={styles.frame}
      />

      <View style={styles.form}>
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  frame: {
    position: "absolute",
    top: 2,
    left: 0,
    width: "100%",
  },
  form: {
    marginTop: 40,
  },
});
