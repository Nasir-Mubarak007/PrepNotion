import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Surface } from "react-native-paper";

const SelectBar = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onTap}>
      <Surface elevation={2} style={styles.surface} mode="elevated">
        <Text style={styles.text}>{item}</Text>
        <AntDesign name="right" size={16} />
      </Surface>
    </TouchableOpacity>
  );
};

export default SelectBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6C4EE1A",
    borderRadius: 5,
    height: 50,
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
  surface: {
    borderRadius: 5,
    height: "100%",
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
});
