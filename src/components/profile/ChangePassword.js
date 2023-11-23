import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PaperInput from "../PaperInput";
import { Button, Dialog, Portal } from "react-native-paper";
import { useState } from "react";

const Notice = ({ visible, onCancel, navigation }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title style={{ textAlign: "center" }}>
          Information Updated Successfully
        </Dialog.Title>
        <Dialog.Content>
          <Text>{""}</Text>
        </Dialog.Content>
        <Dialog.Actions style={{ justifyContent: "center" }}>
          <Button
            mode="contained"
            onPress={onCancel}
            style={{
              height: 38,
              width: 82,
              borderRadius: 5,
              backgroundColor: "orange",
            }}
          >
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const ChangePassword = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  function cancel() {
    setVisible(false);
    navigation.goBack();
  }
  function handleSave(params) {
    setVisible(true);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ gap: 11, marginHorizontal: 16, marginTop: 20 }}>
        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>Old Password:</Text>
          <PaperInput value={""} />
        </View>

        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>New Password:</Text>
          <PaperInput value={""} />
        </View>

        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>New Password:</Text>
          <PaperInput value={""} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 100 }}>
        <Button
          mode="contained"
          style={{
            height: 46,
            borderRadius: 5,
            backgroundColor: "black",
            paddingTop: 4,
          }}
          onPress={handleSave}
        >
          <Text style={styles.btnTxt}>Save</Text>
        </Button>
      </View>

      <Notice onCancel={cancel} visible={visible} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
