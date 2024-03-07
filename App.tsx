import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import Login from "./src/screens/login/Login";
import Register from "./src/screens/register/Register";
import Notifications from "./src/screens/notifications/Notification";
import CardInfos from "./src/screens/cardInfos/CardInfos";
import FinancialInfos from "./src/screens/financialInfos/FinancialInfos";
import Configurations from "./src/screens/configurations/Configurations";
import UserOptions from "./src/screens/userOptions/UserOptions";
import AvailableLimit from "./src/screens/availableLimit/AvailableLimit";
import OpenInvoice from "./src/screens/openInvoice/OpenInvoice";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Notifications: undefined;
  CardInfos: undefined;
  FinancialInfos: undefined;
  UserOptions: undefined;
  Configurations: undefined;
  LimitCard: undefined;
  AvailableLimit: undefined;
  OpenInvoice: undefined;
};

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();

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
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerTitle: "", headerShadowVisible: false }}
              />
              <Stack.Screen
                name="CardInfos"
                component={CardInfos}
                options={{ headerTitle: "", headerShadowVisible: false }}
              />
              <Stack.Screen
                name="FinancialInfos"
                component={FinancialInfos}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Configurations"
                component={Configurations}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UserOptions"
                component={UserOptions}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AvailableLimit"
                component={AvailableLimit}
                options={{ headerTitle: "", headerShadowVisible: false }}
              />
              <Stack.Screen
                name="OpenInvoice"
                component={OpenInvoice}
                options={{ headerTitle: "", headerShadowVisible: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
