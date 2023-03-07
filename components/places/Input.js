import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Input({ title, textInputConfig }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
    color: Colors.primary500,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary200,
  },
});
