import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PaperInput from "../PaperInput";
import { Avatar, Button, Dialog, Portal } from "react-native-paper";
import InfoHeader from "../infoHeader";
import { ErrorMessage } from "formik";

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

const Info = ({ navigation }) => {
  const [editting, setEditting] = useState(false);
  const [visible, setVisible] = useState(false);

  const [displayName, setDisplayName] = useState(displayName || "");
  const [email, setEmail] = useState(email || "");

  const [show, setShow] = useState(false);

  function cancel() {
    setVisible(false);
    setShow(false);
  }

  function handleSave(params) {
    setVisible(true);
  }

  function handleSaved() {
    setVisible(false);
    setShow(true);
  }

  return (
    <View style={{ flex: 1, gap: 20 }}>
      <InfoHeader
        title={"My Information"}
        navigation={navigation}
        onTap={() => setEditting(!editting)}
      />
      <View
        style={{
          marginTop: 10,
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={60}
          source={require("../../assets/images/avatar.png")}
        />

        {editting && (
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
        )}
      </View>
      <View style={{ gap: 11, marginHorizontal: 10 }}>
        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>Full Name:</Text>
          <PaperInput
            disabled={!editting}
            value={displayName}
            changeText={(val) => setDisplayName(val)}
          />
        </View>

        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>Email:</Text>
          <PaperInput
            disabled={!editting}
            value={email}
            changeText={(val) => setEmail(val)}
          />
        </View>
      </View>

      {editting && (
        <View style={{ paddingHorizontal: 10, marginTop: 88 }}>
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
      )}

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
        <Notice onCancel={cancel} visible={show} />
      </Portal>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
