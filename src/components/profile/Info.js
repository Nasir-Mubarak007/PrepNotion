import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import PaperInput from "../PaperInput";
import { Avatar, Button, Dialog, Portal } from "react-native-paper";
import { ErrorMessage } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { FIREBASE_AUTH, db } from "./../../firebase";
import InfoHeader from "../infoHeader";
import { askPermission, getName, pickImage, uploadImage } from "../../utils";
import LoadingOverlay from "../ui/LoadingOverlay";

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
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  const [editting, setEditting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await askPermission();
      setPermissionStatus(status);
    })();
  }, []);

  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectectedImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState();

  function cancel() {
    setVisible(false);
    setShow(false);
  }
  function handleReturn() {
    setShow(false);
    setEditting(false);
  }

  function handleSave() {
    setVisible(true);
  }

  async function handleSaved() {
    setLoading(true);
    console.log(user.uid);
    let photoUrl;

    if (selectedImage) {
      const { url } = await uploadImage(
        selectedImage,
        `images/${user.uid}`,
        "profilePicture"
      );
      photoUrl = url;
    }

    console.log(photoUrl);

    const userData = {
      displayName,
      email: user.email,
    };

    if (photoUrl) {
      userData.photoURL = photoUrl;
    }

    await Promise.all([
      updateProfile(user, userData),
      updateDoc(doc(db, "users", user.uid), userData),
    ]);
    setLoading(false);
    setVisible(false);
    setShow(true);
  }

  async function handleProfilePicture() {
    const result = await pickImage();
    console.log(result);
    if (!result.canceled) {
      setSelectectedImage(result.assets[0].uri);
    }

    if (!permissionStatus) {
      return <LoadingOverlay />;
    }
    if (permissionStatus !== "granted") {
      alert(
        "Sorry, PrepNotion need camera roll permissions to make this work!"
      );
      return;
    }
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
          height: 70,
          alignItems: "center",
          borderRadius: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!selectedImage ? (
          <Avatar.Image size={80} source={{ uri: user?.photoURL }} /> || (
            <MaterialCommunityIcons
              name="camera-plus"
              color={"gray"}
              size={60}
            />
          )
        ) : (
          <Avatar.Image size={80} source={{ uri: selectedImage }} />
        )}

        {editting && (
          <TouchableOpacity
            style={{
              // paddingTop: 10,
              // justifyContent: "center",
              // alignItems: "center",
              position: "absolute",
              right: "38%",
              bottom: "-9%",
            }}
            onPress={handleProfilePicture}
          >
            <Avatar.Icon
              size={30}
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
          <PaperInput disabled={true} value={user?.email} />
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
            {loading ? "Saving..." : "Discard Changes?"}
          </Dialog.Title>

          {loading ? (
            <LoadingOverlay message={"updating Info..."} />
          ) : (
            <>
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
            </>
          )}
        </Dialog>
        <Notice onCancel={handleReturn} visible={show} />
      </Portal>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
