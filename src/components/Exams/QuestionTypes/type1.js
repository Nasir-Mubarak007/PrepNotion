import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Colors } from "../../../constants/Colors";
import IconButton from "../../ui/IconButton";

const Option = ({ optionz, chosen, setChosen, onTap }) => {
  // optionz.map((data,index) => {
  //   return (
      <TouchableOpacity
      // key={index}
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
      <Text style={styles.icon}> {optionz.option}</Text>
      
    </TouchableOpacity>

  //   );
  // })
  // return (
  //   <TouchableOpacity
  //     // key={index}
  //     style={[
  //       {
  //         padding: 8,
  //         paddingHorizontal: 12,
  //         minHeight: 45,
  //         justifyContent: "center",

  //         maxHeight: 300,
  //         borderRadius: 4,
  //         backgroundColor: "white",
  //         // width: "100%",
  //       },
  //       { backgroundColor: chosen ? Colors.Primary200 : "white" },
  //     ]}
  //     onPress={() => {
  //       setChosen(!chosen);
  //       onTap();
  //     }}
  //   >
  //     <Text style={styles.icon}> {`${optionz.option.key} ${optionz.option.value}`}</Text>
      
  //   </TouchableOpacity>
  // );
};

const QuestionType_1 = ({ optionz }) => {
  const [chosen, setChosen] = useState(false);

  console.log(optionz.question);
  console.log(optionz.option);
  return (
    <View style={styles.questionContainer}>
      <Button
        style={{
          width: 220,
          backgroundColor: "#4F525433",
          borderRadius: 5,
          height: 35,
          justifyContent: "center",
          marginBottom: 6,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: "black" }}>Read Passage</Text>
      </Button>

      <View style={{ position: "absolute", right: 15, top: 10 }}>
        <IconButton icon={"volume-high-sharp"} size={24} onPress={() => {}} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>{optionz.question}</Text>
      </View>

      <View style={{ marginTop: 20, gap: 16 }}>
      
        <Option
          optionz={optionz}
          // key={optionz.index}
          chosen={chosen}
          setChosen={setChosen}
          onTap={() => {}}
        />
      </View>
    </View>
  );
};

export default QuestionType_1;

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
});
