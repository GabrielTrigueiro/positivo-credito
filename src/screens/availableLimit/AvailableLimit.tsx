import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../App";
import UserHeader from "../../components/userHeader/UserHeader";
import HomeCard from "../../components/homeCard/HomeCard";
import { Container, Title, TotalLimit } from "./styles";
import { StyleSheet, View } from "react-native";
import DefaultButton from "../../components/defaultButton/DefaultButton";
import theme from "../../styles/theme";

type Props = NativeStackScreenProps<RootStackParamList, "AvailableLimit">;

const AvailableLimit = ({ navigation, route }: Props) => {
  return (
    <Container>
      <UserHeader navigation={navigation} route={route} />
      <View>
        <HomeCard navigation={navigation} route={route} />
      </View>
      <Title>Limite total</Title>
      <TotalLimit>R$ 4.500,00</TotalLimit>
      <View style={styles.container}>
        <View style={[styles.greenProgress, { width: `40%` }]} />
        <View style={[styles.orangeProgress, { width: `60%` }]} />
      </View>
      <DefaultButton label="Solicitar limite +" action={() => {}} />
    </Container>
  );
};

export default AvailableLimit;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
    overflow: "hidden",
    maxWidth: 150,
  },
  greenProgress: {
    height: "100%",
    backgroundColor: theme.COLORS.GRAY5,
  },
  orangeProgress: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});
