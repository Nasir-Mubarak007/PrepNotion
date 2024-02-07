import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Button, Dialog, Portal } from "react-native-paper";
import * as Speech from "expo-speech";

import { Colors } from "../../../constants/Colors";
import IconButton from "../../ui/IconButton";

const Option = ({ item, chosen, setChosen, onTap, options }) => {
  return (
    <View style={{ gap: 9 }}>
      {Object.values(item).map((item) => {
        return (
          <TouchableOpacity
            key={item}
            style={[
              {
                padding: 8,
                paddingHorizontal: 12,
                minHeight: 45,
                justifyContent: "center",
                maxHeight: 300,
                borderRadius: 4,
                backgroundColor: "white",
                // width: "100%",
              },
              {
                backgroundColor:
                  chosen === item[0] ? Colors.Primary200 : "white",
              },
            ]}
            onPress={() => {
              // handleAnswerPicked(item[0]);
              setChosen(item[0]);
              onTap(options.id, item[0]);
            }}
          >
            <Text style={styles.icon}>
              {item[0].toUpperCase()} {item[1]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const QuestionType_2 = ({ options, index, handleAnswer, showModal }) => {
  const [ispreping, setIspreping] = useState(false);
  const [visible, setVisible] = useState(false);
  const [chosen, setChosen] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);
  //  answer status

  // const questionTouched = () => {
  //   if (chosen) {
  //     const item = { question: index + 1, selectedAnswer: chosen };
  //     answers.push(item);
  //   }
  // };

  useEffect(() => {
    setChosen(null);
    //   setAnswerStatus(null)
  }, [options]);

  console.log(answers);

  // const handleModal = (mode) => {
  //   switch (mode) {
  //     case "image":
  //       navigation.navigate("examsMode", { title: "JAMB" });
  //       break;

  //     default:
  //       break;
  //   }
  // }

  const handleSpeak = () => {
    setIspreping(true);
    const settings = {
      language: "en",
      pitch: 1,
      rate: 0.5,
      // volume: 1,
    };
    const choices = Object.entries(options.option).map((data) => {
      console.log(data[0], data[1]);
      return `${data[0].toUpperCase()}. ${data[1]}`;
    });
    const selections = `${options.passage} 
                        ${options.question}   
                        ${choices} `;

    Speech.speak(selections, settings);

    setIspreping(false);
  };

  // const handleRead = () => {
  //   setIspreping(true);
  //   const settings = {
  //     language: "en",
  //     pitch: 1,
  //     rate: 0.5,
  //     // volume: 1,
  //   };

  //   const selection = `${options.passage} `;

  //   Speech.speak(selection, settings);

  //   setIspreping(false);
  // };

  // if (ispreping === true) {
  //   return
  // }

  return (
    <View style={styles.questionContainer}>
      {options.modal && (
        <Button
          style={{
            width: 200,
            backgroundColor: "#4F525433",
            borderRadius: 5,
            height: 35,
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: 6,
          }}
          onPress={() => {
            showModal();
          }}
        >
          <Text style={{ color: "black" }}>{options.modal}</Text>
        </Button>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          width: 30,
          right: 15,
          top: 10,
        }}
        activeOpacity={0.4}
        onPress={() => handleSpeak()}
      >
        {ispreping ? (
          <ActivityIndicator size={"small"} />
        ) : (
          <IconButton
            icon={"volume-high-sharp"}
            size={24}
            color={"black"}
            onPress={() => {}}
          />
        )}
      </TouchableOpacity>
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {options.question}
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 16 }}>
        {Object.entries(options.option).map((data) => {
          return (
            <Option
              item={[data]}
              key={data}
              chosen={chosen}
              setChosen={setChosen}
              onTap={handleAnswer}
              options={options}
            />
          );
        })}
      </View>

      {/* <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={{ justifyContent: 'center', borderRadius: 9, width: '99%', backgroundColor: "white", padding: 20 }}>
          <ScrollView>
            <TouchableOpacity style={{
              position: "absolute", width: 30, right: 15, top: 5
            }} activeOpacity={0.4} onPress={() => handleRead()}>
              {ispreping ? <ActivityIndicator size={"small"} /> : <IconButton icon={"volume-high-sharp"} size={24} />}
            </TouchableOpacity>
            <Text>{options.passage}</Text>
          </ScrollView>
        </Modal>
      </Portal> */}
    </View>
  );
};

export default QuestionType_2;

const styles = StyleSheet.create({
  questionContainer: {
    // height: 438,
    padding: 13,
    paddingBottom: 22,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    backgroundColor: "#F3F2F2",
    borderRadius: 20,
    gap: 10,
  },
  icon: {
    color: Colors.black,
  },
});
