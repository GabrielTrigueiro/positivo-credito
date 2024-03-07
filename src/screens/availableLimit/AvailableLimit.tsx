import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "AvailableLimit">;

const AvailableLimit = ({ navigation, route }: Props) => {
  return <Text>AvailableLimit</Text>;
};

export default AvailableLimit;
