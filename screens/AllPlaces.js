import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/places/PlacesList.js";
import { fetchAllPlaces } from "../utils/database";

function AllPlaces({ route }) {
  const [favouritePlaces, setFavouritePlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      async function loadPlaces() {
        const places = await fetchAllPlaces();
        setFavouritePlaces(places);
      }
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={favouritePlaces} />;
}

export default AllPlaces;
