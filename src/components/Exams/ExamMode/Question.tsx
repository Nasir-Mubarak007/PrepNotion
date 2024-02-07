import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Chip, Button, Portal, Dialog } from "react-native-paper";

import QuestionHeader from "../../questionHeader";
import IconButton from "../../ui/IconButton";
import { Colors } from "../../../constants/Colors";
import QuestionType_2 from "../QuestionTypes/type2";

import Modal from "../../Modal";
import BottomSheet from "@gorhom/bottom-sheet";

import { Questions } from "../../../constants/Questions";
import Timer from "../../Timer";

// const QuestionType = ({ option }) => {
//   if (option.questionType === "multipleChoice") {
//     return <QuestionType_4 options={option} />;
//   }

//   if (option.questionType === "trueOrFalse") {
//     return <QuestionType_2 options={option} />;
//   }

//   // if (option.questionType === "image") {
//   //   return <QuestionType_5 options={option} />;
//   // }

//   if (option.questionType === "passage") {
//     return <QuestionType_3 options={option} />;
//   }
// };
// modal for confirming submision
// const Confirmation = ({ visible, onCancel, onStart }) => {
//   return (
//     <Dialog visible={visible} onDismiss={onCancel}>
//       <Dialog.Title style={{ textAlign: "center" }}>
//         Confirm Submission
//       </Dialog.Title>
//       <Dialog.Content>
//         <View style={{ gap: 20 }}>
//           <Text style={styles.title}>Are you sure you want to submit?</Text>
//         </View>
//       </Dialog.Content>
//       <Dialog.Actions style={{ justifyContent: "center", gap: 23 }}>
//         <Button
//           onPress={onCancel}
//           style={{
//             height: 38,
//             width: 82,
//             borderRadius: 5,
//           }}
//         >
//           Cancel
//         </Button>

//         <Button
//           mode="contained"
//           onPress={onStart}
//           style={{
//             height: 38,
//             width: 82,
//             borderRadius: 5,
//             backgroundColor: Colors.Primary,
//           }}
//         >
//           Start
//         </Button>
//       </Dialog.Actions>
//     </Dialog>
//   );
// };

// chip (button) of a subject to select it
const Chips = ({ item, value, setValue, onTap }) => {
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
        onTap();
      }}
    >
      {item}
    </Chip>
  );
};

// modal for passage
// const Passage = ({ item, show, onCancel }) => {
//   const containerStyle = { backgroundColor: "white", padding: 20 };

//   <Dialog visible={show} onDismiss={onCancel}>
//     {/* <Dialog.Title></Dialog.Title> */}
//     <Dialog.Content>
//       <ScrollView>
//         <Text>{item}</Text>
//       </ScrollView>
//     </Dialog.Content>
//   </Dialog>;
// };

const Question = ({ navigation, route }) => {
  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [subject, setSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [show, setShow] = useState(false);

  const [questionData, setQuestionData] = useState([...Questions]);

  const currentQuestion = questionData[index];
  const currentQuestion2 = questionData;

  const title = route.params.title;
  console.log(title);
  const hour = route.params.hour;
  console.log(hour);
  const min = route.params.min;
  const year = route.params.year;
  const subjects = route.params.data;

  useEffect(() => {
    setQuestionData(() =>
      questionData.map((question) => ({
        ...question,
        answer: null,
      }))
    );

    // setLoading(true);
    // ....
    // setQuestionData(res.data);
    // setLoading(false);
  }, []);

  const handleAnswerChosen = (questionId: number, answerChosen: string) => {
    const question = questionData.find(
      (question) => question.id === questionId
    );

    if (question) {
      // Update the answer property of the found question
      question.answer = answerChosen;

      // Create a new array with the updated question
      const updatedQuestions = questionData.map((q) => {
        if (q.id === questionId) {
          console.log(question);
          return question;
        }
        return q;
      });

      // Set the state to the new array
      setQuestionData(updatedQuestions);
      // console.log(updatedQuestions);
    }
  };

  const decrease = () => {
    setIndex(index - 1);
  };

  const changeSubject = (subject) => {
    setSubject(subject);
  };

  const increase = () => {
    setIndex(index + 1);
  };

  function handleCancel() {
    setVisible(false);
  }

  function submitHandler() {
    setVisible(true);
  }

  // for the modal
  const bottomSheetRef = useRef<BottomSheet>(null);
  const closeSheet = () => {
    bottomSheetRef.current?.close();
  };

  function showModal() {
    bottomSheetRef.current?.expand();
    console.log("first");
  }

  {
    isLoading && <Text>Loading...</Text>;
  }

  return (
    <View style={{ gap: 18, backgroundColor: "white", flex: 1 }}>
      <QuestionHeader
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
            <Chips
              item={item}
              value={value}
              setValue={setValue}
              onTap={() => changeSubject(item)}
            />
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
            <IconButton
              color={Colors.Primary}
              icon={"calculator"}
              size={16}
              onPress={undefined}
            />
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

          <QuestionType_2
            options={currentQuestion}
            index={index}
            handleAnswer={handleAnswerChosen}
            showModal={showModal}
          />
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
          disabled={index <= 0 ? true : false}
          activeOpacity={index <= 0 ? 1 : 0.6}
          style={[
            {
              width: 60,
              height: 38,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.Primary,
              opacity: 0.6,
            },
            {
              opacity: index <= 0 ? 0.6 : 1,
            },
          ]}
          onPress={decrease}
        >
          <IconButton
            color={Colors.black}
            icon={"arrow-back"}
            size={22}
            onPress={undefined}
          />
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
            onPress={undefined}
          />
        </TouchableOpacity>

        <Modal
          ref={bottomSheetRef}
          passage={currentQuestion.passage}
          data={undefined}
          renderItem={undefined}
          close={closeSheet}
        />

        <View>
          {index >= currentQuestion2.length - 1 ? (
            <Button style={styles.btn} onPress={submitHandler}>
              Submit
            </Button>
          ) : (
            <TouchableOpacity
              style={{
                width: 60,
                height: 38,
                backgroundColor: Colors.Primary,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={increase}
            >
              <IconButton
                color={"black"}
                icon={"arrow-forward"}
                size={20}
                onPress={undefined}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  btn: {
    width: 60,
    borderRadius: 5,
    height: 38,
    backgroundColor: "#FF6E06",
  },
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
