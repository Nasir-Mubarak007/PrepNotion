import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Card, IconButton, Surface } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ActionCard from "../components/ui/ActionCard";
import { FIREBASE_AUTH } from "../firebase";

const Actions = [
  {
    icon: "account-box-outline",
    title: "My Information",
    subtitle: "Your Personal Information",
    value: "profile",
  },
  {
    icon: "shield-lock-outline",
    title: "Security",
    subtitle: "Set Password, and biometrics ",
    value: "security",
  },
  {
    icon: "chart-line",
    title: "Increase Points",
    subtitle: "Get more points to take exams",
    value: "increase",
  },
];

const ProfileScreen = ({ navigation }) => {
  const [claimed, setClaimed] = useState(false);

  function handleTap(actions) {
    switch (actions) {
      case "profile":
        navigation.navigate("info");
        break;
      case "security":
        navigation.navigate("Security");
        break;

      case "increase":
        navigation.navigate("increase");
        break;

      default:
        alert("Not Yet Handled");
        break;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.heading}>
          <Avatar.Image
            size={30}
            source={require("../assets/images/avatar.png")}
          />
          <Text style={styles.headText}>Ibrahim</Text>
        </View>

        <View>
          <Text style={styles.desc}>Total Points</Text>
          <Text style={styles.points}>205</Text>
        </View>
      </View>

      <Surface elevation={2} style={styles.claim}>
        <Text style={styles.desc}>
          {claimed ? "Points claimed for today" : "Claim your daily 3 points"}
        </Text>
        <Button
          mode="contained"
          onPress={() => {
            setClaimed(true);
            setTimeout(() => {
              setClaimed(false);
            }, 1000 * 60 * 25);
          }}
          style={{ backgroundColor: claimed ? "#BABABA" : "black" }}
        >
          Claim
        </Button>
      </Surface>

      <FlatList
        data={Actions}
        renderItem={({ item }) => (
          <ActionCard
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onTap={() => handleTap(item.value)}
          />
        )}
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 5,
          marginTop: 50,
        }}
      />

      <View style={{ paddingHorizontal: 16 }}>
        <Button
          mode="outlined"
          style={{
            height: 46,
            borderRadius: 5,
          }}
          onPress={() => FIREBASE_AUTH.signOut()}
        >
          <Text style={styles.btnTxt}>Log out</Text>
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  btnTxt: { fontSize: 16, fontWeight: "500", color: "black" },
  claim: {
    alignItems: "center",
    borderRadius: 5,
    width: 340,
    height: 74,
    position: "absolute",
    top: 170,
    left: "",
    marginHorizontal: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 59,
  },
  container: {
    flex: 1,
    gap: 24,
  },
  Header: {
    paddingHorizontal: 20,
    paddingVertical: 54,
    backgroundColor: "#009BFF33",
    width: "100%",
    height: 200,
    gap: 15,
  },
  heading: {
    flexDirection: "row",
    gap: 10,
  },
  headText: {
    fontSize: 22,
    fontWeight: "500",
  },
  desc: {
    fontSize: 16,
  },
  points: {
    fontSize: 20,
    fontWeight: "700",
  },
});
