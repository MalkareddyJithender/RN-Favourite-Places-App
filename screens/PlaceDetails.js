import { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";

import OutlinedButton from "../components/ui/OutlinedButton";
import Colors from "../constants/colors";
import { fetchPlaceDetails } from "../utils/database";

function PlaceDetails({ navigation, route }) {
  const selectedPlaceId = route.params.placeId;
  const [fetchedPlace, setFetchedPlace] = useState(null);

  function showonMapHandler() {
    navigation.navigate("Map", {
      latitude: fetchedPlace.location.lat,
      longitude: fetchedPlace.location.lng,
    });
  }

  useEffect(() => {
    async function getPlaceData() {
      const placeData = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(placeData);
      // setting screen title dynamically
      navigation.setOptions({
        title: placeData.title,
      });
    }
    getPlaceData();
  }, []);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallbackContainer}>
        <Text> Loading place details ...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showonMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  address: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: "500",
  },
});
