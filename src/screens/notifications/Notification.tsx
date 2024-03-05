import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Container } from "./styles";
import { RootStackParamList } from "../../../App";
import { Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

const Notifications = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Text>Notifications</Text>
    </Container>
  );
};

export default Notifications;
