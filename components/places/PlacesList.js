import { View, FlatList, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/colors";

import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  const navigation = useNavigation();

  function renderPlaceItem({ item }) {
    function selectPlaceHandler() {
      navigation.navigate("PlaceDetails", {
        placeId: item.id,
      });
    }

    return <PlaceItem place={item} onSelect={selectPlaceHandler} />;
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderPlaceItem}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary50,
    fontWeight: "600",
  },
});
