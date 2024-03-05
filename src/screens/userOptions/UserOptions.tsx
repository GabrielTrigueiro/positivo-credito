import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Container } from "./styles";
import { RootStackParamList } from "../../../App";
import { Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "UserOptions">;

const UserOptions = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Opções do usuário</Text>
    </Container>
  );
};

export default UserOptions;
