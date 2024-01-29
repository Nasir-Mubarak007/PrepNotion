import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import * as Speech from 'expo-speech';


import { Colors } from "../../../constants/Colors";
import IconButton from "../../ui/IconButton";

const Option = ({ item, chosen, setChosen, onTap }) => {

  return (
    <View style={{ gap: 9 }}>
      {Object.values(item).map(item => {
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
              { backgroundColor: chosen ? Colors.Primary200 : "white" },

            ]}
            onPress={() => {
              setChosen(!chosen);
              onTap();
            }}
          >
            <Text style={[styles.icon, { color: chosen ? "white" : "black" }]}>{item[0].toUpperCase()} {' '} {item[1]}</Text>
          </TouchableOpacity>
        )
      })}


    </View>
  );
};

const QuestionType_2 = ({ options }) => {
  const [ispreping, setIspreping] = useState(false)

  const handleModal = (mode) => {
    switch (mode) {
      case "image":
        navigation.navigate("examsMode", { title: "JAMB" });
        break;

      default:
        break;
    }
  }

  const handleSpeak = () => {
    setIspreping(true)
    const optionz = {
      language: 'en',
      pitch: 1,
      rate: 0.5,
      // volume: 1,
    };
    const choices = Object.entries(options.option).map((data) => {
      console.log(data[0], data[1]);
      return `${data[0].toUpperCase()}. ${data[1]}`
    })
    const selections = `${options.question}   ${choices} `


    Speech.speak(selections, optionz)

    setIspreping(false)
  }

  // if (ispreping === true) {
  //   return 
  // }

  return (
    <View style={styles.questionContainer}>
      {options.modal && (<Button
        style={{
          width: 200,
          backgroundColor: "#4F525433",
          borderRadius: 5,
          height: 35,
          justifyContent: "center",
          alignSelf: 'center',
          marginBottom: 6,
        }}
        onPress={() => { }}
      >
        <Text style={{ color: "black" }}>{options.modal}</Text>
      </Button>)}

      {/* <Button
        style={{
          width: 220,
          backgroundColor: "#4F525433",
          borderRadius: 5,
          height: 35,
          justifyContent: "center",
          alignSelf: 'center',
          marginBottom: 6,
        }}
        onPress={() => { }}
      >
        <Text style={{ color: "black" }}>Read Passage</Text>
      </Button> */}

      <TouchableOpacity style={{
        position: "absolute", width: 30, right: 15, top: 10
      }} activeOpacity={0.4} onPress={() => handleSpeak()}>
        {ispreping ? <ActivityIndicator size={"small"} /> : <IconButton icon={"volume-high-sharp"} size={24} />}
      </TouchableOpacity>
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {options.question}
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 16 }}>
        {Object.entries(options.option).map((data) => {
          const [chosen, setChosen] = useState('');
          return (
            <Option
              item={[data]}
              key={data}
              chosen={chosen}
              setChosen={setChosen}
              onTap={() => { }}
            />
          );
        })}
      </View>
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
    color: Colors.black
  }

});
