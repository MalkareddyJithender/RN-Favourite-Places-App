import { Alert } from "react-native";

export async function verifyPermissions(
  type,
  permissionInfo,
  permissionStatus,
  requestPermission
) {
  if (permissionInfo.status === permissionStatus.UNDETERMINED) {
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  } else if (permissionInfo.status === permissionStatus.DENIED) {
    Alert.alert(
      "Insufficient Permissions!",
      `you need to grant ${type} permissions to use this app.`
    );
    return false;
  } else {
    return true;
  }
}
