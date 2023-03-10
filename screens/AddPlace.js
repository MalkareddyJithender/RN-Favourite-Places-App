import PlaceForm from "../components/places/PlaceForm";

function AddPlace({ navigation }) {
  
  function createPlaceHandler(place) {
    // navigating to AllPlaces screen with place data.
    navigation.navigate("AllPlaces", {
      place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
