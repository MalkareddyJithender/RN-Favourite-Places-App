import { useState } from "react";
import { View, Text, Image, Alert, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import OutlinedButton from "../ui/OutlinedButton";
import Preview from "../ui/Preview";
import { verifyPermissions } from "../../utils/helpers";

function ImagePicker({ onTakeImage }) {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [takenImage, setTakenImage] = useState(null);

  // async function verifyPermissions() {
  //   if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
  //     const permissionResponse = await requestPermission();
  //     return permissionResponse.granted;
  //   } else if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
  //     Alert.alert(
  //       "Insufficient Permissions!",
  //       "you need to grant camera permissions to use this app."
  //     );
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  async function takeImageHandler() {
    const cameraOptions = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    };
    const hasPermission = await verifyPermissions(
      "camera",
      cameraPermissionInfo,
      PermissionStatus,
      requestPermission
    );
    if (!hasPermission) {
      return;
    }
    try {
      const image = await launchCameraAsync(cameraOptions);
      const imageUri = image.assets[0].uri;
      setTakenImage(imageUri);
      onTakeImage(imageUri);
    } catch (e) {
      console.log("error", e);
    }
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (takenImage) {
    imagePreview = <Image style={styles.image} source={{ uri: takenImage }} />;
  }

  return (
    <View>
      <Preview>{imagePreview}</Preview>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
