import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import SelectBar from "../../ui/SelectBar";
import PaperInput from "../../PaperInput";
import { Searchbar } from "react-native-paper";

const Exams = [
  { name: "JAMB", value: "jamb" },
  { name: "WAEC", value: "waec" },
  { name: "NECO", value: "neco" },
  { name: "NABTEB", value: "nabteb" },
];

const ExamMode = ({ navigation }) => {
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
    <View style={{ paddingVertical: 10, gap: 10 }}>
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

export default ExamMode;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // height: 100,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
});
