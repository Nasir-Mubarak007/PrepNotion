import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  Icon,
  PaperProvider,
  Portal,
} from "react-native-paper";
import PaperInput from "../PaperInput";

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
            onPress={() => {
              onCancel();
              navigation.replace("info");
            }}
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

const InfoEdit = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  function handleSave() {
    setVisible(true);
  }

  function cancel(params) {
    setVisible(false);
    setShow(false);
  }
  function handleSaved() {
    setVisible(false);
    setShow(true);
    // navigation.navigate("info");
  }
  return (
    <View>
      <View
        style={{
          marginTop: 30,
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={60}
          source={require("../../assets/images/avatar.png") || { uri: "" }}
        />
        <TouchableOpacity
          style={{
            // paddingTop: 10,
            // justifyContent: "center",
            // alignItems: "center",
            position: "absolute",
            right: "40%",
            bottom: "2%",
          }}
        >
          <Avatar.Icon
            size={20}
            icon="camera"
            style={{
              backgroundColor: "#009BFF",
              // paddingTop: 10,
              // justifyContent: "center",
              // alignItems: "center",
              // position: "absolute",
              // right: "40%",
              // bottom: "2%",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 11, marginHorizontal: 10 }}>
        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>Full Name:</Text>
          <PaperInput value={""} />
        </View>

        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>Email:</Text>
          <PaperInput value={""} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 10, marginTop: 88 }}>
        <Button
          mode="contained"
          style={{
            height: 46,
            borderRadius: 5,
            backgroundColor: "black",
            paddingTop: 4,
          }}
          // onPress={handleSave}
        >
          <Text style={styles.btnTxt}>Save</Text>
        </Button>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={cancel}>
          <Dialog.Title style={{ textAlign: "center" }}>
            Discard Changes?
          </Dialog.Title>
          <Dialog.Content>
            <Text>{""}</Text>
          </Dialog.Content>
          <Dialog.Actions style={{ justifyContent: "center", gap: 57 }}>
            <Button mode="text" onPress={cancel}>
              Discard
            </Button>
            <Button
              mode="contained"
              onPress={handleSaved}
              style={{
                height: 38,
                width: 82,
                borderRadius: 5,
                backgroundColor: "orange",
              }}
            >
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Notice onCancel={cancel} visible={show} navigation={navigation} />
    </View>
  );
};

export default InfoEdit;

const styles = StyleSheet.create({
  btnTxt: { fontSize: 16, fontWeight: "500" },
});
