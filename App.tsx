import {ThemeProvider} from "styled-components";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import COLORS from "./src/styles/theme"
import {Text, View, StatusBar} from "react-native";

export default function App() {

  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar  />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Text>oi</Text>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
