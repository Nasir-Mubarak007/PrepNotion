import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Chip, Button, Portal, Dialog } from "react-native-paper";

import QuestionHeader from "../../questionHeader";
import IconButton from "../../ui/IconButton";
import { Colors } from "../../../constants/Colors";
import QuestionType_2 from "../QuestionTypes/type2";

import Modal from "../../Modal";
import BottomSheet from "@gorhom/bottom-sheet";

import { Questions } from "../../../constants/Questions";
import Timer from "../../Timer";
import LoadingOverlay from "../../ui/LoadingOverlay";

// chip (button) of a subject to select it
const Chips = ({ item, value, setValue, onTap, first }) => {
  const [select, setSelect] = useState(first);
  return (
    <Chip
      style={[
        styles.chip,
        {
          backgroundColor: select && value === item ? Colors.Primary : "white",
        },
        {
          borderColor: select && value === item ? Colors.Primary : Colors.black,
        },
      ]}
      mode="outlined"
      onPress={() => {
        setSelect(item);
        setValue(item);
        onTap();
        console.log(select);
      }}
    >
      <Text
        style={{ color: select && value === item ? "white" : Colors.black }}
      >
        {item}
      </Text>
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
  const subjects = route.params.data;

  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [subject, setSubject] = useState(subjects[0]);
  const [isLoading, setIsLoading] = useState(false);

  // const [show, setShow] = useState(false);

  const [questionData, setQuestionData] = useState([...Questions]);

  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [overallQuestions, setoverallQuestions] = useState([]);

  const changeSubject = (course) => {
    setSubject(course);
  };

  useLayoutEffect(() => {
    setIsLoading(true);
    const filteredQuestions = questionData.filter((question) => {
      return question.subject === subject;
    });

    setCurrentQuestions(filteredQuestions);
    setIsLoading(false);

    if (overallQuestions.includes(subject)) {
      return;
    } else {
      setoverallQuestions((entry) => [
        ...entry,
        { subject: subject, questions: currentQuestions },
      ]);
    }
  }, [subject, changeSubject]);
  console.log(
    "filtered questions",
    currentQuestions,
    "overall",
    overallQuestions
  );

  const currentQuestion = questionData[index];
  // questionData[index];
  const totalQuestions = currentQuestions;
  // questionData;

  const title = route.params.title;
  console.log(title);
  const hour = route.params.hour;
  const min = route.params.min;
  const year = route.params.year;

  useEffect(() => {
    setQuestionData(() =>
      questionData.map((question) => ({
        ...question,
        answer: null,
      }))
    );

    // to fetch questions from server
    // setLoading(true);
    //  e.g `https://jsonplaceholder.typicode.com/${category}/${year}/${title}/${subjects}`
    // ....
    // setQuestionData(res.data);
    // setLoading(false);
  }, []);

  const handleUserAnswerSelection = (
    questionId: number,
    answerChosen: string
  ) => {
    const question = currentQuestions.find(
      (question) => question.id === questionId
    );

    if (question) {
      // Update the answer property of the found question
      question.answer = answerChosen;

      // Create a new array with the updated question
      const updatedQuestions = questionData.map((questionItem) => {
        if (questionItem.id === questionId) {
          console.log(question);
          return question;
        }
        return questionItem;
      });

      // Set the state to the new array
      setQuestionData(updatedQuestions);
      // console.log(updatedQuestions);
    }
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={[
          styles.question,
          {
            backgroundColor: item?.answer ? Colors.Primary : "white",
            borderWidth: item?.answer ? 0 : 1,
            borderColor: index === item ? Colors.Secondary60 : "black",
          },
        ]}
        onPress={() => {
          setIndex(index), closeSheet();
        }}
      >
        <Text style={{ color: item?.answer ? "white" : "black" }}>
          {index + 1}
        </Text>
      </TouchableOpacity>
    ),
    []
  );

  const decrease = () => {
    setIndex(index - 1);
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
  }

  {
    isLoading && <LoadingOverlay message="Loading..." />;
  }

  return (
    <View style={{ gap: 18, backgroundColor: "white", flex: 1 }}>
      <QuestionHeader
        title={title}
        min={min}
        hour={hour}
        year={year}
        subjects={subjects}
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
                year: year,
                subjects: subjects,
                totalQuestions: overallQuestions,
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
              first={subjects[0]}
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
            handleAnswer={handleUserAnswerSelection}
          />
        </ScrollView>
      </View>

      <Modal
        ref={bottomSheetRef}
        data={totalQuestions}
        renderItem={renderItem}
        subject={subject}
        currQuestion={currentQuestion}
      />

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
          onPress={showModal}
        >
          <IconButton
            color={Colors.black}
            icon={"calendar-outline"}
            size={20}
            onPress={undefined}
          />
        </TouchableOpacity>

        <View>
          {index >= totalQuestions.length - 1 ? (
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

  question: {
    minWidth: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
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
