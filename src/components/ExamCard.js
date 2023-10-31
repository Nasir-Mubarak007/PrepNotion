import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

const Card = ({ logo, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../assets/images/jamb.png")}
        width={36.85}
        height={35.55}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7C8C3",
    width: 109,
    height: 89,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    borderRadius: 5,
    margin: 5,
    // marginLeft: 0,
  },
});
