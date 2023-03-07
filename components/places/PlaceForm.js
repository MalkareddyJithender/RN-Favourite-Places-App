import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Input from "./Input";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <Input
        title="Title"
        textInputConfig={{
          value: enteredTitle,
          onChangeText: changeTitleHandler,
        }}
      />
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
});
