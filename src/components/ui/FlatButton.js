import { Pressable, StyleSheet, Text, View } from "react-native";

function FlatButton({ children, onPress, shade }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.buttonText, { color: shade }]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    // textAlign: "center",
    color: "black",
  },
});
