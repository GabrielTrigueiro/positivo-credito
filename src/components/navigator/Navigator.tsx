import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, IconNavButton } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

interface INvIconProps {
  onPress: () => void;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
}

export type TNavigatorProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
  show?: boolean;
};

const NavIcon = (props: INvIconProps) => {
  return (
    <IconNavButton onPress={props.onPress}>
      <Ionicons
        style={{ margin: "auto" }}
        name={props.iconName}
        size={24}
        color="white"
      />
    </IconNavButton>
  );
};

const Navigator = <T extends keyof RootStackParamList>({
  navigation,
  route,
  show,
}: TNavigatorProps<T>) => {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 4,
      }}
    >
      <NavIcon
        iconName={route.name === "Home" ? "wallet" : "wallet-outline"}
        onPress={() => navigation.navigate("Home")}
      />
      <NavIcon
        iconName={
          route.name === "FinancialInfos" ? "bar-chart" : "bar-chart-outline"
        }
        onPress={() => navigation.navigate("FinancialInfos")}
      />
      <NavIcon
        iconName={
          route.name === "Configurations" ? "options" : "options-outline"
        }
        onPress={() => navigation.navigate("Configurations")}
      />
    </Container>
  );
};

export default Navigator;
