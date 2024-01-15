import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Colors } from "../../../constants/Colors";
import IconButton from "../../ui/IconButton";

const Option = ({ item, chosen, setChosen, onTap }) => {
  return (
    <View style={{ gap: 9 }}>
      {Object.values(item).map(item => {
        console.log(item)
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
            <Text style={styles.icon}>{item[0].toUpperCase()} {' '} {item[1]}</Text>
          </TouchableOpacity>
        )
      })}


    </View>
  );
};

const QuestionType_2 = ({ options }) => {
  return (
    <View style={styles.questionContainer}>
      <View style={{ position: "absolute", right: 15, top: 10 }}>
        <IconButton icon={"volume-high-sharp"} size={24} onPress={() => { }} />
      </View>
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {options.question}
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 16 }}>
        {Object.entries(options.option).map((data) => {
          const [chosen, setChosen] = useState('');
          console.log(chosen)
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
});
