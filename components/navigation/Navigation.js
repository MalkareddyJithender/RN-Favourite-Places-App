import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "../../screens/AllPlaces";
import AddPlace from "../../screens/AddPlace";
import Map from "../../screens/Map";
import Colors from "../../constants/colors";
import IconButton from "../ui/IconButton";

const Stack = createNativeStackNavigator();

function Navigation() {
  function addIconHandler(navigation) {
    navigation.navigate("AddPlace");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: "Your Favourite Places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                size={32}
                color={tintColor}
                onPress={addIconHandler.bind(this, navigation)}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: "Add a new Place",
          }}
        />
        <Stack.Screen name="Map" component={Map} options={{
          title:"Google Map"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
