import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import ExamHeader from "../examHeader";
import { Chip, List, Searchbar } from "react-native-paper";
import ModeCard from "../ModeCard";

const Mode = [
  { icon: "file", title: "Exam Mode", value: "cbt" },
  { icon: "desk-lamp", title: "Study Mode", value: "study" },
  { icon: "shape-plus", title: "Game Mode", value: "game" },
];

const Years = ["2023/24", "2022/23", "2021/22"];
const Subjects = ["Arabic", "Mathematics", "Social Studies"];

const Jamb = ({ navigation }) => {
  // const [expanded, setExpanded] = React.useState(true);

  // const handlePress = () => setExpanded(!expanded);
  function handleOnTap(mode) {
    switch (mode) {
      case "cbt":
        navigation.navigate("examsMode", { title: "JAMB" });
        break;
      case "study":
        return navigation.navigate("StudyMode");
        break;
      default:
        alert("not handled");
    }
  }
  return (
    <View style={{ marginTop: 20, flex: 1, gap: 20 }}>
      <ExamHeader
        title={"JAMB"}
        subtitle={"Start your learning journey from here"}
        navigation={navigation}
      />

      <View style={{ marginHorizontal: 10 }}>
        <Searchbar
          placeholder="Search for any Subject"
          style={{ height: 48, alignItems: "center", borderRadius: 5 }}
        />
      </View>

      <ScrollView>
        <View style={{ marginLeft: 16, marginRight: 0, gap: 15 }}>
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
              columnGap: 15,
              // marginLeft: 5,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            margin: 10,
            marginRight: 0,
            marginTop: 20,
            marginBottom: 9,
            gap: 10,
          }}
        >
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Available Years</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Years}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {}} style={styles.chip}>
                <Text style={{ fontSize: 14 }}>{item}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ columnGap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            margin: 10,
            marginRight: 0,
            marginTop: 20,
            marginBottom: 9,
            gap: 10,
          }}
        >
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Subjects</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Subjects}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {}} style={styles.chip2}>
                <Text style={{ fontSize: 14 }}>{item}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ columnGap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* <List.Section title="Accordions"> */}
        {/* <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion> */}

        {/* <List.Accordion
          title="Controlled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion> */}
        {/* </List.Section> */}
      </ScrollView>
    </View>
  );
};

export default Jamb;

const styles = StyleSheet.create({
  chip: {
    width: 111,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
  chip2: {
    minWidth: 99,
    maxWidth: 151,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 28,
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
});
