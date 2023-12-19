import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./ui/Button";
import OutlinedBtn from "./ui/OutlinedBtn";
import { Colors } from "../constants/Colors";

const ResultsPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Results Page</Text>

          <Image
            source={require("../assets/images/test.png")}
            width={141.46}
            height={142.83}
            style={{ marginBottom: 20, marginTop: 5 }}
          />

          <Text style={styles.title}>Your Score:</Text>

          <Text style={styles.score}>302</Text>

          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <OutlinedBtn
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                Home
              </OutlinedBtn>
            </View>
            <View style={styles.btn}>
              <Button shade={Colors.Primary} onPress={() => {}}>
                Answers
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultsPage;

const styles = StyleSheet.create({
  btn: {
    width: "50%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  resultContainer: {
    alignItems: "center",
    gap: 9,
    marginTop: "20%",
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.Primary50,
    paddingVertical: "16%",
    marginBottom: 20,
  },
  score: {
    fontSize: 36,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
  },
});
