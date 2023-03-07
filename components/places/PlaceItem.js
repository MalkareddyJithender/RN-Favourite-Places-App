import { View, Text, Image } from "react-native";

function PlaceItem({ place }) {
  return (
    <View>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  );
}

export default PlaceItem;
