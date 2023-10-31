import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar, IconButton } from "react-native-paper";

const InfoHeader = ({ navigation, options, title, onTap }) => {
  // const title = getHeaderTitle(options, );
  return (
    <Appbar.Header style={styles.Header}>
      <Appbar.BackAction
        onPress={navigation.goBack}
        style={{ borderRadius: 5, borderWidth: 1, width: 30, height: 30 }}
      />
      <Appbar.Content title={title} />
      <IconButton
        icon="square-edit-outline"
        size={20}
        onPress={onTap}
        style={styles.icon}
      />
    </Appbar.Header>
  );
};

export default InfoHeader;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "25%",
    right: 16,
  },
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 100,
  },
});
