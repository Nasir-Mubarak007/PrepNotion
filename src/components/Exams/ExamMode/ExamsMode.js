import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExamModeHeader from "../../ExamModeHeader";
import { Checkbox, FAB, RadioButton, Searchbar } from "react-native-paper";
import { useState } from "react";

const Subjects = [
  "Literature in English",
  "Hausa",
  "Igbo",
  "Yoruba",
  "Mathematics",
  "Arabic",
  "Civic Education",
  "Biology",
  "Integrated Science",
  "Government",
  "Physics",
  "Chemistry",
  "Economics",
  "Agricultural Science",
  "Animal Husbandry",
];

const selected = [];

const CheckBox = ({ item }) => {
  const [value, setValue] = useState(null);
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 5,
        backgroundColor: "#D7C8C21A",
      }}
    >
      <RadioButton.Item
        label={item}
        status={value === item ? "checked" : "unchecked"}
        onPress={() => {
          setValue(item);
          selected.push(item);
          console.log(selected);
        }}
      />
    </View>
  );
};

const ExamsMode = ({ navigation, route }) => {
  const title = route.params.title;

  return (
    <View style={{ gap: 20, flex: 1 }}>
      <ExamModeHeader navigation={navigation} route={route} />
      <View style={{ marginHorizontal: 16 }}>
        <Searchbar
          placeholder="Search for any Subject"
          style={{ height: 48, alignItems: "center", borderRadius: 5 }}
        />
      </View>
      <View style={{ marginHorizontal: 16, gap: 10 }}>
        <Text>Select Subject Combination</Text>

        <FlatList
          data={Subjects}
          renderItem={({ item }) => <CheckBox item={item} />}
          contentContainerStyle={{ gap: 15, paddingBottom: 357 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FAB
        style={{
          position: "absolute",
          marginHorizontal: 16,
          bottom: "8%",
          // height: 44,
          width: "92%",
          backgroundColor: "black",
        }}
        color="white"
        label="Proceed"
        onPress={() => navigation.navigate("startExam", { selected, title })}
      >
        Proceed
      </FAB>
    </View>
  );
};

export default ExamsMode;

const styles = StyleSheet.create({});
