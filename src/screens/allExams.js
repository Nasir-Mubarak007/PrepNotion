import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

import SelectBar from "../components/ui/SelectBar";
import Input from "../components/Input";
import PaperInput from "../components/PaperInput";

const Exams = [
  { name: "JAMB", value: "jamb" },
  { name: "WAEC", value: "waec" },
  { name: "NECO", value: "neco" },
  { name: "NABTEB", value: "nabteb" },
];

const AllExams = ({ navigation }) => {
  function handleTap(exam) {
    switch (exam) {
      case "jamb":
        navigation.navigate("home");
        break;
      case "waec":
        return navigation.navigate("StudyMode");
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
    <View style={{ gap: 12 }}>
      <Appbar.Header style={styles.Header} mode="center-aligned">
        <Appbar.Content title={"All Exams"} />
      </Appbar.Header>

      <PaperInput placeholder="Search for any Exam" />

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Select Exam</Text>

        <FlatList
          data={Exams}
          renderItem={({ item }) => (
            <SelectBar item={item.name} onTap={() => handleTap(item.value)} />
          )}
          contentContainerStyle={{ gap: 9, marginTop: 20 }}
        />
      </View>
    </View>
  );
};

export default AllExams;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#CCEBFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 95,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
});
