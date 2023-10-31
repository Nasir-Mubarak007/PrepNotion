import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionCard from "../ui/ActionCard";
import { Avatar, Card, TouchableRipple } from "react-native-paper";
import ActionCard2 from "../ui/ActionCard2";

const Increase = ({ navigation }) => {
  return (
    <View style={{ marginTop: 31, gap: 22 }}>
      <View style={{ marginHorizontal: 16 }}>
        <Text style={styles.desc}>Total Points</Text>
        <Text style={styles.points}>205</Text>
      </View>

      <View style={{ gap: 23 }}>
        <ActionCard2
          title={"Watch Ads"}
          subtitle={"Earn 20 points per Ad"}
          icon={"play-box-outline"}
          onTap={() => {}}
        />
        <ActionCard
          icon="currency-usd"
          title={"Buy Points"}
          subtitle={"Purchase points for as low as N30"}
          onTap={() => navigation.navigate("buy")}
        />
      </View>
    </View>
  );
};

export default Increase;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F2F3",
    marginHorizontal: 16,
    borderRadius: 5,
    height: 66,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 10,
  },
});
