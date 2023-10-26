import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { examTypes } from "../constants/examTypes";
import Card from "../components/ExamCard";
import CategoriesCard from "../components/CategoriesCard";
import ModeCard from "../components/ModeCard";
import Input from "../components/Input";
import PaperInput from "../components/PaperInput";

const Categories = [
  {
    color: "#EBE3E0",
    logo: "../assets/image/jamb",
    title: "Education",
  },
  {
    color: "#FFF0E6",
    logo: "../assets/image/jamb",
    title: "Data Analysis",
  },
  {
    color: "#E8F1FB",
    logo: "../assets/image/jamb",
    title: "Database",
  },
];

const Mode = [
  { icon: "file", title: "CBT Mode", value: "cbt" },
  { icon: "desk-lamp", title: "Study Mode", value: "study" },
  { icon: "shape-plus", title: "Game Mode", value: "game" },
];

export default function Home({ navigation }) {
  function handleOnTap(mode) {
    switch (mode) {
      case "cbt":
        navigation.navigate("ExamMode");
        break;
      case "study":
        return navigation.navigate("StudyMode");
        break;
      default:
        alert("not handled");
    }
  }

  const { Header } = useSafeAreaInsets();
  return (
    <View style={{ gap: 12, flex: 1 }}>
      <View style={styles.Header}>
        <View style={{ maxWidth: "80%" }}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Hello Ibrahim</Text>

          <Text style={{ fontSize: 20.5 }}>
            What exam are you preparing for today?
          </Text>
        </View>

        <TouchableOpacity style={styles.Avatar} onPress={() => {}}>
          <Avatar.Image
            size={40}
            source={require("../assets/images/avatar.png")}
          />
        </TouchableOpacity>
      </View>

      <PaperInput placeholder={"Search for Category, exam, year"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 5, marginRight: 0, gap: 10 }}>
          <Text style={styles.heading}>Recently Viewed</Text>
          <FlatList
            data={examTypes}
            renderItem={({ item }) => (
              <Card logo={item.logo} title={item.title} />
            )}
            contentContainerStyle={{ columnGap: 17, marginLeft: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ margin: 5, marginRight: 0, marginBottom: 9, gap: 10 }}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate("categories")}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Categories}
            renderItem={({ item }) => (
              <CategoriesCard
                color={item.color}
                logo={item.logo}
                title={item.title}
              />
            )}
            contentContainerStyle={{ columnGap: 17, marginLeft: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ margin: 5, marginRight: 0, gap: 7 }}>
          <Text style={styles.heading}>Modes</Text>

          <FlatList
            data={Mode}
            renderItem={({ item }) => (
              <ModeCard
                icon={item.icon}
                title={item.title}
                onTap={() => handleOnTap(item.value)}
              />
            )}
            contentContainerStyle={{
              columnGap: 17,
              marginLeft: 5,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: 60,
    // paddingVertical: 15,
    height: 160,
    width: "100%",
    backgroundColor: "#009BFF33",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    gap: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
  headingContainer: {
    flexDirection: "row",
    marginRight: 20,
    justifyContent: "space-between",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "500",
  },
  Avatar: {
    paddingTop: 9,
  },
});
