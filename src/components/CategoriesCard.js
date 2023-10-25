import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import React from "react";

const CategoriesCard = ({ color, logo, title }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Image
        source={require("../assets/images/jamb.png")}
        width={36.85}
        height={35.55}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7C8C3",
    width: 109,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    borderRadius: 5,
  },
});
