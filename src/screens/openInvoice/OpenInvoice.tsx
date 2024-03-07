import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";

import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "OpenInvoice">;

const OpenInvoice = ({ navigation, route }: Props) => {
  return <Text>OpenInvoice</Text>;
};

export default OpenInvoice;
