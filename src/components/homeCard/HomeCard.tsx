import { View, Text } from "react-native";
import { CardText, CardView } from "./styles";
import { RootStackParamList } from "../../../App";
import { TNavigatorProps } from "../navigator";

const HomeCard = <T extends keyof RootStackParamList>({
  navigation,
  route,
  show,
}: TNavigatorProps<T>) => {
  return (
    <CardView
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
      }}
      onTouchEndCapture={() => navigation.navigate("CardInfos")}
    >
      <CardText>***** 2030</CardText>
      <CardText>MATHEUS MEDEIROS</CardText>
    </CardView>
  );
};

export default HomeCard;
