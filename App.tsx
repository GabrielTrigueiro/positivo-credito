import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {StatusBar} from 'expo-status-bar';
import {ThemeProvider} from "styled-components";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "./src/styles/theme"
 import {useCallback, useEffect, useState} from "react";
import {View, Text} from "react-native";

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
          Poppins_800ExtraBold,
          DMSans_400Regular,
          DMSerifDisplay_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <GestureHandlerRootView style={{flex: 1}}>
        <View>
          <Text>oi</Text>
        </View>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}