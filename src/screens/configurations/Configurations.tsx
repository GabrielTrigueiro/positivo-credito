import { Text } from "react-native";
import { Container } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Configurations">;

const Configurations = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Configurações</Text>
    </Container>
  );
};

export default Configurations;
