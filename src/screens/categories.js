import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Surface, TextInput } from "react-native-paper";

import SelectBar from "../components/ui/SelectBar";
import { useNavigation } from "@react-navigation/native";

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
        navigation.navigate("ExamMode");
        break;
      // case "uiux":
      //   return navigation.navigate("home");
      //   break;
      case "edu":
        return navigation.navigate("education");
        break;
      // case "data":
      //   return navigation.navigate("StudyMode");
      //   break;
      // case "base":
      //   return navigation.navigate("StudyMode");
      //   break;
      // case "back":
      //   return navigation.navigate("StudyMode");
      //   break;
      default:
        alert("not handled");
    }
  }

  return (
    <View style={{ gap: 9 }}>
      <Appbar.Header style={styles.Header} mode="center-aligned">
        <Appbar.Content title={"Categories"} />
      </Appbar.Header>

      <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
        <TextInput
          placeholder="Search for any Exam"
          value=""
          // underlineStyle={{ borderRadius: 9 }}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          underlineStyle={{
            width: 0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
          style={{
            backgroundColor: "#F2F2F2",
            borderRadius: 5,
            height: 44,
          }}
        />
      </View>

      <View style={{ marginTop: 9, marginHorizontal: 9 }}>
        <Text style={styles.heading}>Categories</Text>

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

export default Categories;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "green",
    height: 100,
    backgroundColor: "green",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
});
