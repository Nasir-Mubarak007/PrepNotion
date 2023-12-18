import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Checkbox } from "react-native-paper";
import { Colors } from "../../../constants/Colors";
import IconButton from "../../ui/IconButton";

const Option = ({ item, chosen, setChosen, onTap }) => {
  return (
    <View
      style={[
        {
          //   padding: 8,
          paddingHorizontal: 12,
          minHeight: 45,

          maxHeight: 300,
          borderRadius: 4,
          backgroundColor: "white",
          // width: "100%",
        },
        { backgroundColor: chosen ? Colors.Primary200 : "white" },
      ]}
    >
      <Checkbox.Item
        status={chosen ? "checked" : "unchecked"}
        label={item}
        onPress={() => {
          setChosen(!chosen);
        }}
      />
    </View>
  );
};

const QuestionType_4 = ({ options }) => {
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
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          What is the major difference between Nigeria and other african
          coutries and their neighbors
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 16 }}>
        {options.map((data, index) => {
          const [chosen, setChosen] = useState(false);
          return (
            <Option
              item={data}
              key={data.id}
              chosen={chosen}
              setChosen={setChosen}
              //   onTap={() => {}}
            />
          );
        })}
      </View>
    </View>
  );
};

export default QuestionType_4;

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
