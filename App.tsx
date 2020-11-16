import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  if (fontsLoaded) {
    return (
      <>
        <StatusBar />
        <Home />
      </>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
