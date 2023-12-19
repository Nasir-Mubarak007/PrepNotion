import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, onPress, shade, disabled, isValid }) {
  const Color = shade;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        { backgroundColor: Color },
      ]}
      onPress={onPress}
      // disabled={!isValid}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    margin:8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    // backgroundColor: isValid ? Color : "orange",
    elevation: 2,
    shadowColor: "blue",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
