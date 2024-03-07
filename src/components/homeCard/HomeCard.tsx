import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CardText, CardView } from "./styles";
import { RootStackParamList } from "../../../App";
import { TNavigatorProps } from "../navigator";
import theme from "../../styles/theme";
import { useState } from "react";

const HomeCard = <T extends keyof RootStackParamList>({
  navigation,
  route,
  show,
}: TNavigatorProps<T>) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      navigation.navigate("CardInfos");
    }, 10);
  };

  return (
    <CardView
      isPressed={isPressed}
      colors={[theme.COLORS.BLUE, theme.COLORS.BLUE5]}
      locations={[0.1, 0.9]}
      start={[0, 0]}
      end={[1, 1]}
      onTouchEndCapture={handlePress}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 32,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 14,
      }}
    >
      <CardText>***** 2030</CardText>
      <CardText>MATHEUS MEDEIROS</CardText>
    </CardView>
  );
};

export default HomeCard;
