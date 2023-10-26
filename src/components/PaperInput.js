import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const PaperInput = ({ placeholder, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        // underlineStyle={{ borderRadius: 9 }}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        underlineStyle={styles.underline}
        style={styles.input}
      />
    </View>
  );
};

export default PaperInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    height: 44,
  },
  underline: {
    width: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
