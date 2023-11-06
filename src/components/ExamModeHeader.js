import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const ExamModeHeader = ({ navigation, route }) => {
  const title = route.params.title;
  return (
    <View style={{ gap: 20 }}>
      <Appbar.Header style={styles.Header}>
        <Appbar.BackAction
          onPress={navigation.goBack}
          style={{ borderRadius: 5, borderWidth: 1, width: 30, height: 30 }}
        />
        <Appbar.Content title={title + " Exam Mode"} />
      </Appbar.Header>
    </View>
  );
};

export default ExamModeHeader;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 100,
  },
});
