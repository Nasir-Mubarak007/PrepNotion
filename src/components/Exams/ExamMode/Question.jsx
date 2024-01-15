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
import QuestionType_5 from "../QuestionTypes/type5";

import { Questions } from "../../../constants/Questions";
import Timer from "../../Timer";

const QuestionType = ({ option }) => {
  if (option.questionType === "multipleChoice") {
    return <QuestionType_4 options={option} />;
  }

  if (option.questionType === "trueOrFalse") {
    return <QuestionType_2 options={option} />;
  }

  // if (option.questionType === "image") {
  //   return <QuestionType_5 options={option} />;
  // }

  if (option.questionType === "passage") {
    return <QuestionType_3 options={option} />;
  }
};

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

const Questionz = ({ navigation, route }) => {
  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);

  const currentQuestion = Questions[index];

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
        onCancel={handleCancel}
        visible={visible}
      />
      <View style={{ gap: 9, marginLeft: 16, justifyContent: "center" }}>
        <Text style={styles.coloredTitle}>
          Time:{" "}
          <Timer
            hours={hour}
            mins={min}
            next={() => {
              navigation.navigate("results", {
                title: title,
                time: { hour, min },
              });
            }}
          />
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

      <View style={{ height: "40%" }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 30, gap: 9 }}
          showsVerticalScrollIndicator={false}
        >
          {/* {currentQuestion.map(data =>{
            return  */}
            {/* <QuestionType option={currentQuestion} />; */}
          {/* })} */}
          
          <QuestionType_2  options={currentQuestion}/>
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
          onPress={() => {
            setIndex(index - 1);
          }}
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
            onPress={() => {
              setIndex(index + 1);
            }}
          >
            <IconButton color={"black"} icon={"arrow-forward"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questionz;

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
