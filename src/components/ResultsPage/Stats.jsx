import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Stats = ({ title, subjects }) => {
  return (
    <View style={styles.chiefContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.resultContainer}>
        {/* <View> */}
        <View style={[styles.card, { backgroundColor: Colors.orange20 }]}>
          <Text>Total Questions</Text>
          <Text style={styles.results}>350</Text>
        </View>
        <View style={[styles.card, { backgroundColor: Colors.Secondary20 }]}>
          <Text>Attempted</Text>
          <Text style={styles.results}>309</Text>
        </View>
        {/* </View> */}
        <View style={styles.card}>
          <Text>Time Used</Text>
          <Text style={styles.results}>1h:38m</Text>
        </View>
        <View style={[styles.card, { backgroundColor: Colors.green20 }]}>
          <Text>Your Score</Text>
          <Text style={styles.results}>300</Text>
        </View>
      </View>
      <Text style={styles.title}>Performance %</Text>
      <View>
        {subjects.map((Subject, ind) => (
          <View key={ind}>
            <Text>{Subject}</Text>
            <View></View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  chiefContainer: {
    flex: 1,
    width: "100%",
    padding: 0,
    marginHorizontal: 16,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  resultContainer: {
    marginHorizontal: 9,
    marginBottom: 9,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 12,
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 10,
    padding: 15,
    width: 154,
    height: 98,
    backgroundColor: Colors.Primary50,
  },
  results: {
    fontSize: 32,
    fontWeight: "500",
  },
});
