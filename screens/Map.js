import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Alert } from "react-native";

import IconButton from "../components/ui/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const region = {
    latitude: 17.487932,
    longitude: 78.3572695,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    const coords = {
      latitude: lat,
      longitude: lng,
    };
    setSelectedLocation(coords);
  }

  function saveLocationHandler() {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked 😒",
        "select the location (by tapping on the map) first 🤦‍♂️"
      );
      return;
    }
    // navigate to add place screen
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.latitude,
      pickedLng: selectedLocation.longitude,
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={saveLocationHandler}
        />
      ),
    });
  }, [navigation, selectedLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
