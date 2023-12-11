import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CoursesHeader from "./CoursesHeader";
import { Checkbox, FAB, List, RadioButton, Searchbar } from "react-native-paper";
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
//   const [value, setValue] = useState(null);
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 9,
        backgroundColor: "#D7C8C21A",
      }}
    >

      <List.Accordion
      title={item}
      style={{
        width: "100%",
        borderRadius: 9,
        backgroundColor: "#D7C8C21A",
      }}
       >
        <List.Item 
        title={'Study Past Questions'}
          onPress={() => {
            
          }} 
        />

        <List.Item 
        title={'Exam'}
          onPress={() => {
            
          }} 
        />

        <List.Item 
        title={'View Sylabus'}
          onPress={() => {
            
          }} 
        />

        <List.Item 
        title={'Game Mode'}
          onPress={() => {
            
          }} 
        />

       </List.Accordion>
      {/* <RadioButton.Item
        label={item}
        status={value === item ? "checked" : "unchecked"}
        onPress={() => {
          setValue(item);
          selected.push(item);
          console.log(selected);
        }}
      /> */}
    </View>
  );
};

const Courses = ({ navigation, route }) => {
  const title = route.params.title;

  return (
    <View style={{ gap: 20, flex: 1 }}>
      <CoursesHeader navigation={navigation} route={route} />
      <View style={{ marginHorizontal: 16 }}>
        <Searchbar
          placeholder="Search for any Subject"
          style={{ height: 48, alignItems: "center", borderRadius: 5 }}
        />
      </View>
      <View style={{ marginHorizontal: 16, gap: 15 }}>
        <Text style={styles.title}>Subjects</Text>

        <FlatList
          data={Subjects}
          renderItem={({ item }) => <CheckBox item={item} />}
          contentContainerStyle={{ gap: 15, paddingBottom: 357 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'500'
    }
});
