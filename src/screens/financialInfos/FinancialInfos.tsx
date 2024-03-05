import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Container } from "./styles";
import { RootStackParamList } from "../../../App";
import { Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "FinancialInfos">;

const FinancialInfos = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Informações financeiras</Text>
    </Container>
  );
};

export default FinancialInfos;
