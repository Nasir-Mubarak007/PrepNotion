import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Searchbar } from "react-native-paper";

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
        navigation.navigate("JAMB");
        break;
      case "waec":
        return navigation.navigate("WAEC");
        break;
      case "neco":
        return navigation.navigate("NECO");
        break;
      case "nabteb":
        return navigation.navigate("NABTEB");
        break;
      default:
        alert("not handled");
    }
  }
  return (
    <View style={{ gap: 20, flex: 1 }}>
      <Appbar.Header style={styles.Header} mode="center-aligned">
        <Appbar.Content title={"All Exams"} />
      </Appbar.Header>

      <View style={{ marginHorizontal: 10 }}>
        <Searchbar
          placeholder="Search for any Exam"
          style={{ height: 45, alignItems: "center", borderRadius: 5 }}
        />
      </View>

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Select Exam</Text>

        <FlatList
          data={Exams}
          renderItem={({ item }) => (
            <SelectBar item={item.name} onTap={() => handleTap(item.value)} />
          )}
          contentContainerStyle={{ gap: 10, marginTop: 20 }}
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
