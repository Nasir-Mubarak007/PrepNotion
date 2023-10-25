import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SignupForm from "../components/Signup/SinupForm";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Frame.png")}
        style={styles.frame}
      />

      <View style={styles.form}>
        <SignupForm />
      </View>
    </View>
  );
};

export default SignupScreen;

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
    marginTop: 120,
  },
});
