import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PswrdForm from "../components/forgotPswd/PswdForm";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Frame.png")}
        style={styles.frame}
      />

      <View style={styles.form}>
        <PswrdForm />
      </View>
    </View>
  );
};

export default ForgotPassword;

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
