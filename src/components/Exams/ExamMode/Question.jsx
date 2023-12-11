import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Chip, Button, Portal, Dialog } from "react-native-paper";

import QuestionHeader from "../../questionHeader";
import IconButton from "../../ui/IconButton";
import { Colors } from "../../../constants/Colors";
import QuestionType_1 from "../QuestionTypes/type1";
import QuestionType_2 from "../QuestionTypes/type2";
import QuestionType_3 from "../QuestionTypes/type3";
import QuestionType_4 from "../QuestionTypes/type4";

const options = [
  "A.  maximus prime",
  "B.  Optimus Prime",
  "C.  Diablo Noir",
  "D.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nihil ipsa corrupti aut cupiditate ",
];

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
            Start
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const Chips = ({ item, value, setValue }) => {
  const [select, setSelect] = useState(false);
  return (
    <Chip
      style={[
        styles.chip,
        { backgroundColor: select && !value ? "lightblue" : "white" },
      ]}
      mode="outlined"
      onPress={() => {
        setSelect(!select);
        setValue(false);
      }}
    >
      {item}
    </Chip>
  );
};

const Questions = ({ navigation, route }) => {
  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleCancel() {
    setVisible(false);
  }

  const title = route.params.title;
  console.log(title);
  const hour = route.params.hour;
  console.log(hour);
  const min = route.params.min;
  const year = route.params.year;
  const subjects = route.params.data;

  function submitHandler() {
    setVisible(true);
    console.log("clicked");
  }
  return (
    <View style={{ gap: 18, backgroundColor: "white", flex: 1 }}>
      <QuestionHeader
        navigation={navigation}
        title={title}
        onTap={submitHandler}
      />
      <View style={{ gap: 9, marginLeft: 16 }}>
        <Text style={styles.coloredTitle}>
          Time: {hour}H : {min}Mins
        </Text>

        <FlatList
          data={subjects}
          renderItem={({ item }) => (
            <Chips item={item} value={value} setValue={setValue} />
          )}
          horizontal
          contentContainerStyle={{ gap: 10, paddingEnd: 59 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Questions</Text>
        <TouchableOpacity>
          <Text style={[styles.title, styles.blue]}>
            <IconButton color={Colors.Primary} icon={"calculator"} size={16} />{" "}
            Calculator
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "46%" }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 30, gap: 9 }}
          showsVerticalScrollIndicator={false}
        >
          <QuestionType_1 options={options} />
          <QuestionType_2 options={options} />
          <QuestionType_3 options={options} />
          <QuestionType_4 options={options} />
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: 60,
            height: 38,
            backgroundColor: Colors.Primary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {}}
        >
          <IconButton color={Colors.black} icon={"arrow-back"} size={22} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 140,
            height: 45,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.9,
          }}
          onPress={() => {}}
        >
          <IconButton
            color={Colors.black}
            icon={"calendar-outline"}
            size={20}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={{
              width: 60,
              height: 38,
              backgroundColor: Colors.Primary,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <IconButton color={"black"} icon={"arrow-forward"} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <Confirmation
        visible={visible}
        onCancel={handleCancel}
        onStart={() => {
          navigation.navigate("");
          handleCancel();
        }}
      />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  chip: {
    minWidth: 38,
    height: 40,

    justifyContent: "center",
  },
  coloredTitle: {
    color: "#DE6637",
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  blue: {
    color: Colors.Primary,
  },

  icon: {
    fontSize: 16,
    color: "black",
  },
});
