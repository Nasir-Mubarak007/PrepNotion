import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Chip } from "react-native-paper";
import { Colors } from "../../constants/Colors";

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

const QuestionAnswer = ({ subjects, questions }) => {
  const [value, setValue] = useState(false);
  const [subject, setSubject] = useState(subjects[0]);
  const changeSubject = (course) => {
    setSubject(course);
  };

  useEffect(() => {
    setIsLoading(true);
    const filteredQuestions = questions.filter((question) => {
      return question.subject === subject;
    });
  }, []);
  return (
    <View>
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
        contentContainerStyle={{ gap: 10, paddingEnd: 49 }}
        showsHorizontalScrollIndicator={false}
      />
      <Text>Question&Answer</Text>
    </View>
  );
};

export default QuestionAnswer;

const styles = StyleSheet.create({
  chip: {
    minWidth: 38,
    height: 40,

    justifyContent: "center",
  },
});
