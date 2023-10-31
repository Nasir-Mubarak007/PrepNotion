import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Card, TouchableRipple } from "react-native-paper";

const ActionCard2 = ({ title, subtitle, icon, color, onTap }) => {
  return (
    <Card style={styles.container} onPress={onTap}>
      <TouchableRipple rippleColor={"rgba(0, 0, 0, .33)"}>
        <Card.Title
          title={title}
          titleStyle={styles.title}
          subtitle={subtitle}
          subtitleStyle={styles.subtitle}
          style={{ paddingBottom: 5 }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              color={["blue", color]}
              icon={icon}
              theme={{ colors: { primary: "#009BFF" } }}
            />
          )}
        />
      </TouchableRipple>
    </Card>
  );
};

export default ActionCard2;

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
