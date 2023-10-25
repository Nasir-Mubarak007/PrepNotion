import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ModeCard = ({ icon, title, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onTap}>
      <MaterialCommunityIcons name={icon} color={"black"} size={24} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ModeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    width: 109,
    height: 89,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    borderRadius: 5,
  },
});
