import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

import SelectBar from "../../ui/SelectBar";
import Input from "../../Input";
// import { useNavigation } from "@react-navigation/native";

const Exams = [
  { name: "JAMB", value: "jamb" },
  { name: "WAEC", value: "waec" },
  { name: "NECO", value: "neco" },
  { name: "NABTEB", value: "nabteb" },
];

const StudyMode = ({ navigation }) => {
  // const navigation = useNavigation();
  function handleTap(exam) {
    switch (exam) {
      case "jamb":
        navigation.navigate("ExamMode");
        break;
      case "waec":
        return navigation.navigate("home");
        break;
      case "neco":
        return navigation.navigate("StudyMode");
        break;
      case "nabteb":
        return navigation.navigate("StudyMode");
        break;
      default:
        alert("not handled");
    }
  }

  return (
    <View>
      <Appbar.Header style={styles.Header}>
        <Appbar.BackAction
          style={{ borderRadius: 5, borderWidth: 1, width: 30, height: 30 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title={"Study Mode"} />
      </Appbar.Header>

      <View style={{ marginHorizontal: 6 }}>
        <Input placeholder="Search for any Exam" value="" />
      </View>

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Select Exam</Text>

        <FlatList
          data={Exams}
          renderItem={({ item }) => (
            <SelectBar item={item.name} onTap={() => handleTap(item.value)} />
          )}
          contentContainerStyle={{
            gap: 9,
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
};

export default StudyMode;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
});
