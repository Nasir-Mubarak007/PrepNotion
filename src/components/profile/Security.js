import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionCard from "../../components/ui/ActionCard";
import ActionCard2 from "../../components/ui/ActionCard2";
import { Avatar, Card, Switch } from "react-native-paper";

const Security = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={{ flex: 1, gap: 20, paddingTop: 20 }}>
      <ActionCard
        icon={"key-variant"}
        title={"Change Password"}
        onTap={() => navigation.navigate("changePassword")}
      />

      <Card style={styles.container}>
        <Card.Title
          title="Enable Biometrics"
          titleStyle={styles.title}
          style={{ paddingBottom: 5 }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              color={"blue"}
              icon="fingerprint"
              theme={{ colors: { primary: "#009BFF" } }}
            />
          )}
          right={(props) => (
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          )}
        />
      </Card>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F2F3",
    marginHorizontal: 16,
    borderRadius: 5,
    height: 66,
    paddingRight: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
