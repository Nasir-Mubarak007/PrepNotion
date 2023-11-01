import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Searchbar } from "react-native-paper";

import SelectBar from "../../ui/SelectBar";
import Input from "../../Input";
import { useNavigation } from "@react-navigation/native";

const Exams = [
  { name: "JAMB", value: "jamb" },
  { name: "WAEC", value: "waec" },
  { name: "NECO", value: "neco" },
  { name: "NABTEB", value: "nabteb" },
];

const Education = ({ navigation }) => {
  // const navigation = useNavigation();

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
    <View style={{ marginTop: 20, flex: 1 }}>
      <View style={{ marginHorizontal: 10 }}>
        <Searchbar
          placeholder="Search for any Exam"
          style={{ height: 48, alignItems: "center", borderRadius: 5 }}
        />
      </View>

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Exams</Text>

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

export default Education;

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
