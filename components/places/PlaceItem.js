import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PlaceItem({ place }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.place, pressed && styles.pressed]}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  place: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    elevation: 4,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
