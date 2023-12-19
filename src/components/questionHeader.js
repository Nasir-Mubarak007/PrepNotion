import { StyleSheet, View } from "react-native";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar, Button, Text, Portal, Dialog} from "react-native-paper";
import { Image } from "react-native";
import { Colors } from "../constants/Colors";

// import { Colors } from "./constants/Colors";


const Confirmation = ({ visible, onCancel, onStart }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title style={{ textAlign: "center" }}>
          Confirm Submission
        </Dialog.Title>
        <Dialog.Content>
          <View style={{ gap: 20 }}>
            <Text style={styles.title}>Are you sure you want to submit?</Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions style={{ justifyContent: "center", gap: 23 }}>
          <Button
            onPress={onCancel}
            style={{
              height: 38,
              width: 82,
              borderRadius: 5,
            }}
          >
            Cancel
          </Button>

          <Button
            mode="contained"
            onPress={onStart}
            style={{
              height: 38,
              width: 82,
              borderRadius: 5,
              backgroundColor: Colors.Primary,
            }}
          >
            Submit
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const ExamHeader = ({ navigation, title, visible, onTap, onCancel,  }) => {
  
  return (
    <View style={styles.Header}>
      <Appbar.BackAction
        onPress={navigation.goBack}
        style={{
          marginLeft: -2,
          borderRadius: 5,
          borderWidth: 1,
          width: 30,
          height: 30,
        }}
      />

      <View style={styles.title}>
        <Text variant="titleLarge">{title}</Text>
      <Button style={styles.btn} onPress={onTap}>Submit</Button>
      </View>

      <Confirmation
        visible={visible}
        onCancel={onCancel}
        onStart={() => {
          navigation.navigate("results");
          onCancel();
        }}
      />
    </View>
    
  );
};

export default ExamHeader;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "25%",
    right: 16,
  },
  Header: {
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 11,
    paddingTop: 48,
    gap: 20,
    justifyContent: "center",
    maxHeight: 220,
  },
  btn: {
    width: 82,
    borderRadius: 5,
    height: 38,
    backgroundColor: "#FF6E06",
  },
  title: {
    gap: 10,
    marginHorizontal: 9,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between'
  },
});
