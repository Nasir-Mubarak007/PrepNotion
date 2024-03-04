import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { Button, SegmentedButtons } from "react-native-paper";
import Stats from "./ResultsPage/Stats";
import QuestionAnswer from "./ResultsPage/Question&Answer";
import { Colors } from "../constants/Colors";

const AnalysisPage = ({ route }) => {
  const title = route.params.title;
  // const time = route.params.time;
  const subjects = route.params.data;
  const questions = route.params.questions;

  const [value, setValue] = React.useState("statistics");
  const MyComponent = () => {
    if (value === "statistics")
      return <Stats title={title} subjects={subjects} />;
    if (value === "Q&A")
      return <QuestionAnswer subjects={subjects} questions={questions} />;
  };
  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "statistics",
            label: "Stats",
            checkedColor: "white",
            style: {
              borderBottomLeftRadius: 6,
              borderTopLeftRadius: 6,
              borderColor:
                value === "statistics" ? Colors.Primary : Colors.black,
              borderWidth: 0.5,
              borderRightWidth: 0,
              backgroundColor:
                value === "statistics" ? Colors.Primary : "white",
            },
          },
          {
            checkedColor: "white",
            style: {
              borderBottomRightRadius: 6,
              borderTopRightRadius: 6,
              borderColor: value === "Q&A" ? Colors.Primary : Colors.black,
              borderWidth: 0.5,
              borderLeftWidth: 0,
              backgroundColor: value === "Q&A" ? Colors.Primary : "white",
            },
            value: "Q&A",
            label: "Question & Answers",
          },
        ]}
        style={styles.btns}
      />
      <MyComponent />
    </View>
  );
};

export default AnalysisPage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 7,

    flex: 1,
    alignItems: "center",
  },
  btns: {
    marginBottom: 20,
  },
});
