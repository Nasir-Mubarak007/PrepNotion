import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExamModeHeader from "../../ExamModeHeader";
import { Checkbox, FAB, RadioButton, Searchbar } from "react-native-paper";
import { useState } from "react";

const Subjects = [
  "English",
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


const CheckBox = ({ item, selected, setSelected }) => {
  const [value, setValue] = useState([]);
  function handleFilter(item, i) {
    if (i >= 1) {
      i = i + 1
    }
    const result = selected.splice(i, 1)
    console.log(i, result)
  }
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
        status={value ? "unchecked" : "checked"}
        onPress={() => {
          setValue(!value);
          let element = selected.indexOf(item)

          { value ? selected.push(item) : selected.splice(element, 1) }
          console.log(selected)


        }}
      />
    </View>
  );
};

const ExamsMode = ({ navigation, route }) => {
  const [selected, setSelected] = useState([]);
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
          renderItem={({ item }) => <CheckBox item={item} selected={selected} setSelected={setSelected} />}
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
