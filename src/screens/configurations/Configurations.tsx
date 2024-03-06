import { Text } from "react-native";
import { Container } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import Navigator from "../../components/navigator/Navigator";

type Props = NativeStackScreenProps<RootStackParamList, "Configurations">;

const Configurations = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Configurações</Text>
      <Navigator navigation={navigation} route={route} />
    </Container>
  );
};

export default Configurations;
