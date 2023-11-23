import { StyleSheet, View } from "react-native";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar, Avatar, Card, IconButton, Text } from "react-native-paper";
import { Image } from "react-native";

const ExamHeader = ({ navigation, title, subtitle }) => {
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

      <View style={{ gap: 10, marginLeft: 5, marginBottom: 32 }}>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyLarge" style={{ maxWidth: 200 }}>
          {subtitle}
        </Text>
      </View>
      <View style={styles.img}>
        <Image
          source={require("../assets/images/bigJamb.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
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
  img: {
    width: 122,
    height: 117.68,
    position: "absolute",
    top: "40%",
    right: "5%",
  },
});
