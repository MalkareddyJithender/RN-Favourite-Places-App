import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    margin: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: Colors.primary50,
  },
});
