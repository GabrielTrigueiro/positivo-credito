import { ThemeProvider } from "styled-components";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { NavigationContainer } from "@react-navigation/native";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import COLORS from "./src/styles/theme";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login/Login";

export default function App() {
  const [appReady, setAppReady] = useState(false);

  const Stack = createNativeStackNavigator();

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
      <StatusBar />
      <GestureHandlerRootView onLayout={onLayout} style={{ flex: 1 }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
