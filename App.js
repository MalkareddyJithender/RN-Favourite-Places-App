import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Navigation from "./components/navigation/Navigation";
import { init } from "./utils/database";

// displays splash screen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  if (dbInitialized) {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}
