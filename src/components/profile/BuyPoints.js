import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ActionCard2 from "../ui/ActionCard2";

const Points = [
  { icon: "hand-coin-outline", title: "30 points - N500" },
  { icon: "hand-coin-outline", title: "30 points - N500" },
  { icon: "hand-coin-outline", title: "30 points - N500" },
  { icon: "hand-coin-outline", title: "30 points - N500" },
];

const BuyPoints = () => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={Points}
        renderItem={({ item }) => (
          <ActionCard2 title={item.title} icon={item.icon} />
        )}
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 5,
        }}
      />
    </View>
  );
};

export default BuyPoints;

const styles = StyleSheet.create({});
