import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Input from "./Input";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import Place from "../../models/place";

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, selectedImage, selectedLocation);
    onCreatePlace(placeData);
  }

  function takeImageHandler(image) {
    setSelectedImage(image);
  }

  function pickLocationHandler(location) {
    setSelectedLocation(location);
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
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
