import { Text } from "react-native";
import { Container } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "CardInfos">;

const CardInfos = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Informações do cartão</Text>
    </Container>
  );
};

export default CardInfos;
