import { View } from "react-native";
import {
  Container,
  LogoutButton,
  Option,
  OptionContent,
  OptionIcon,
  OptionText,
  Title,
} from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../styles/theme";

interface IOptionProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Configurations">;

const OptionRow = (props: IOptionProps) => {
  return (
    <Option>
      <OptionContent>
        <OptionIcon
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 13.97,

            elevation: 11,
          }}
        >
          <Ionicons
            name={props.iconName}
            size={24}
            color={theme.COLORS.BLUE5}
          />
        </OptionIcon>
        <OptionText>{props.label}</OptionText>
      </OptionContent>
      <Ionicons
        name="arrow-forward-circle-outline"
        size={30}
        color={theme.COLORS.BLUE}
      />
    </Option>
  );
};

const options: IOptionProps[] = [
  { iconName: "person", label: "Perfil" },
  { iconName: "notifications-circle-outline", label: "Notificações" },
  { iconName: "wallet-outline", label: "Cartão" },
  { iconName: "key-outline", label: "Configuração de login" },
  { iconName: "help-buoy-outline", label: "Central de ajuda" },
];

const Configurations = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Title>Configurações</Title>
      {options.map((option, index) => (
        <OptionRow key={index} {...option} />
      ))}
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoutButton>
          <Ionicons
            name="exit-outline"
            size={24}
            style={{ color: theme.COLORS.BLUE5 }}
          />
        </LogoutButton>
        <OptionText>Sair</OptionText>
      </View>
    </Container>
  );
};

export default Configurations;
