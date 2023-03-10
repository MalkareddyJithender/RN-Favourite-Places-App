import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/places/PlacesList.js";

function AllPlaces({ route }) {
  const [favouritePlaces, setFavouritePlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setFavouritePlaces((curFavPlaces) => [
        ...curFavPlaces,
        route.params.place,
      ]);
    }
  }, [isFocused]);

  return <PlacesList places={favouritePlaces} />;
}

export default AllPlaces;
