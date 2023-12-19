import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

function OutlinedBtn({ icon, color, size, onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
      <Text>{children}</Text>
    </Pressable>
  );
}

export default OutlinedBtn;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "inherit",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
});
