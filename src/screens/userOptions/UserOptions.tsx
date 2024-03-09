import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AvatarButton,
  AvatarName,
  AvatarNameButton,
  Container,
  DeletAcountButton,
  Option,
  OptionContent,
  OptionText,
} from "./styles";
import { RootStackParamList } from "../../../App";
import { Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../styles/theme";

interface IOptionProps {
  label: string;
  action?: void;
}

type Props = NativeStackScreenProps<RootStackParamList, "UserOptions">;

const OptionRow = (props: IOptionProps) => {
  return (
    <Option>
      <OptionContent>
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

const UserOptions = ({ navigation, route }: Props) => {
  let options = [
    "Conta conectada",
    "Privacidade e segurança",
    "Configurações de login",
    "Central de ajuda",
  ];
  return (
    <Container>
      <AvatarButton onPress={() => navigation.navigate("UserOptions")}>
        <Avatar.Image
          size={90}
          source={{ uri: "https://i.pravatar.cc/101" }}
          style={{ backgroundColor: "#fff" }}
        />
      </AvatarButton>
      <AvatarNameButton>
        <AvatarName>Jaka</AvatarName>
        <Ionicons name="pencil-sharp" size={20} color={theme.COLORS.BLUE5} />
      </AvatarNameButton>
      {options.map((label, index) => (
        <OptionRow key={index} label={label} />
      ))}
      <DeletAcountButton>
        <Ionicons
          name="trash-bin-outline"
          size={24}
          style={{ color: theme.COLORS.BLUE5 }}
        />
      </DeletAcountButton>
      <OptionText>Deletar conta</OptionText>
    </Container>
  );
};

export default UserOptions;
