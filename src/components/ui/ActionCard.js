import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const ActionCard = ({ icon, title, subtitle, onTap }) => {
  return (
    <Card style={styles.container}>
      <Card.Title
        title={title}
        titleStyle={styles.title}
        subtitle={subtitle}
        subtitleStyle={styles.subtitle}
        style={{ paddingBottom: 5 }}
        left={(props) => (
          <Avatar.Icon
            {...props}
            color="blue"
            icon={icon}
            theme={{ colors: { primary: "#009BFF" } }}
          />
        )}
        right={(props) => (
          <IconButton {...props} icon="chevron-right" onPress={onTap} />
        )}
      />
    </Card>
  );
};

export default ActionCard;

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
