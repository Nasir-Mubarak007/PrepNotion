import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Surface, TextInput } from "react-native-paper";

import SelectBar from "../components/ui/SelectBar";
import PaperInput from "../components/PaperInput";

const Exams = [
  { name: "Programming Languages", value: "program" },
  { name: "UIUX", value: "uiux" },
  { name: "Education", value: "edu" },
  { name: "Data Analysis", value: "data" },
  { name: "Data Base", value: "base" },
  { name: "Backend", value: "back" },
];

const Categories = ({ navigation }) => {
  // const navigation = useNavigation();
  function handleTap(exam) {
    switch (exam) {
      case "program":
        navigation.navigate("Programing");
        break;
      case "uiux":
        return navigation.navigate("UI/UX");
        break;
      case "edu":
        return navigation.navigate("education");
        break;
      // case "data":
      //   return navigation.navigate("dataAnalyst");
      //   break;
      // case "base":
      //   return navigation.navigate("dataBase");
      //   break;
      case "back":
        return navigation.navigate("Backend");
        break;
      default:
        alert("not handled");
    }
  }

  return (
    <View style={{ gap: 12 }}>
      <Appbar.Header style={styles.Header} mode="center-aligned">
        <Appbar.Content title={"Categories"} />
      </Appbar.Header>

      <PaperInput placeholder="Search for any Exam" />

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Categories</Text>

        <FlatList
          data={Exams}
          renderItem={({ item }) => (
            <SelectBar item={item.name} onTap={() => handleTap(item.value)} />
          )}
          contentContainerStyle={{
            gap: 10,
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  Header: {
    height: 95,
    backgroundColor: "#CCEBFF",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
});
