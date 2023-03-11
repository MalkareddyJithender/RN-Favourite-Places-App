import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../utils/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    try {
      // saving data to database
      await insertPlace(place);
      // navigating to AllPlaces screen with place data.
      navigation.navigate("AllPlaces");
    } catch (e) {
      console.log("error", e);
    }
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
