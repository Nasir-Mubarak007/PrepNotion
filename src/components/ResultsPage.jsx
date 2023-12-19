import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./ui/Button";
import OutlinedBtn from "./ui/OutlinedBtn";
import { Colors } from "../constants/Colors";

const ResultsPage = () => {
  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={styles.title}>ResultsPage</Text>

        <Image
          source={require("../assets/images/test.png")}
          width={141.46}
          height={142.83}
        />

        <Text style={styles.title}>Your Score:</Text>

        <Text style={styles.score}>302</Text>

        <View style={styles.btnContainer}>
          <OutlinedBtn onPress={() => {}}>Home</OutlinedBtn>
          <Button shade={Colors.Primary} onPress={() => {}}>
            Answers
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ResultsPage;

const styles = StyleSheet.create({
  btnContainer: {},
  resultContainer: {
    alignItems: "center",
    gap: 9,
    marginTop: "20%",
    marginHorizontal: 16,
    borderRadius:20,
    backgroundColor:Colors.Primary50,
    paddingVertical:'16%'
  },
  score: {},
  title: {},
});
