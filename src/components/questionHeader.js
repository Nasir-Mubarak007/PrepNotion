import { StyleSheet, View } from "react-native";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar, Button, Text } from "react-native-paper";
import { Image } from "react-native";

const ExamHeader = ({ navigation, title }) => {
  return (
    <View style={styles.Header}>
      <Appbar.BackAction
        onPress={navigation.goBack}
        style={{
          marginLeft: -2,
          borderRadius: 5,
          borderWidth: 1,
          width: 30,
          height: 30,
        }}
      />

      <View style={styles.title}>
        <Text variant="titleLarge">{title}</Text>
      </View>
      <Button style={styles.btn}>Submit</Button>
    </View>
  );
};

export default ExamHeader;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "25%",
    right: 16,
  },
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 11,
    paddingTop: 48,
    gap: 20,
    justifyContent: "center",
    maxHeight: 200,
  },
  btn: {
    width: 82,
    borderRadius: 5,
    height: 38,
    backgroundColor: "#FF6E06",
  },
  title: {
    gap: 10,
    marginHorizontal: 9,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
