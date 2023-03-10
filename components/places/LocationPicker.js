import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";

import OutlinedButton from "../ui/OutlinedButton";
import Preview from "../ui/Preview";
import { verifyPermissions } from "../../utils/helpers";
import { getAddress, getMapPreview } from "../../utils/location";

function LocationPicker({ onPickLocation }) {
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  async function getUserLocationHandler() {
    const hasPermission = await verifyPermissions(
      "location",
      locationPermissionInfo,
      PermissionStatus,
      requestPermission
    );
    if (!hasPermission) {
      return;
    }
    try {
      const location = await getCurrentPositionAsync();
      const coords = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
      setPickedLocation(coords);
    } catch (e) {
      console.log("error", e);
    }
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    const staticMapUrl = getMapPreview(pickedLocation.lat, pickedLocation.lng);
    locationPreview = (
      <Image style={styles.image} source={{ uri: staticMapUrl }} />
    );
  }
  // setting location picked on map
  useEffect(() => {
    if (route.params) {
      const location = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(location);
    }
  }, [route.params]);

  useEffect(() => {
    async function manageLocation() {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat,pickedLocation.lng);
        onPickLocation({ ...pickedLocation, address });
      }
    };

    manageLocation();
  }, [pickedLocation]);

  return (
    <View>
      <Preview>{locationPreview}</Preview>
      <View style={styles.buttons}>
        <OutlinedButton icon="location" onPress={getUserLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
