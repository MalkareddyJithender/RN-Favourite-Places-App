import { useState } from "react";
import { View, Button, Text, Image, Alert } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

function ImagePicker() {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    } else if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "you need to grant camera permissions to use this app."
      );
      return false;
    } else {
      return true;
    }
  }

  async function takeImageHandler() {
    const cameraOptions = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    };
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync(cameraOptions);
    console.log("image", image);
  }

  const [takenImage, setTakenImage] = useState(null);

  let imagePreview = <Text>No image taken yet.</Text>;

  if (imagePreview) {
    imagePreview = <Image source={{ uri: takenImage }} />;
  }

  return (
    <View>
      <View>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
