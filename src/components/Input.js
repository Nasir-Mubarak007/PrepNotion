import { View, TextInput, StyleSheet } from "react-native";

function Input({
  contentType,
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  onBlur,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        onBlur={onBlur}
        textContentType={contentType}
        value={value}
        autoFocus={true}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "lightgray",
    borderRadius: 4,
    fontSize: 16,
    width: "98%",
  },

  inputInvalid: {
    backgroundColor: "#fcdcbf",
    borderColor: "red",
  },
});
