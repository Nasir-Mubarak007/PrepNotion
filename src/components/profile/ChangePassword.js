import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PaperInput from "../PaperInput";
import { Button } from "react-native-paper";

const ChangePassword = () => {
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
          // onPress={handleSave}
        >
          <Text style={styles.btnTxt}>Save</Text>
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
