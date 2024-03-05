import {
  ArrowButton,
  Container,
  InfoContainer,
  InfoTextTitle,
  InfoTextValues,
  InfoTitleContainer,
  InfoValuesContainer,
} from "./style";
import { Divider, ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const FinancialInfos = () => {
  const totalLimit = 4000;
  const atual = 2500;
  const percentage = (atual / totalLimit) * 100;
  const remainingPercentage = 100 - percentage;

  return (
    <Container>
      <InfoContainer style={{ alignItems: "flex-end" }}>
        <InfoTitleContainer>
          <InfoTextTitle>Fatura aberta</InfoTextTitle>
          <ArrowButton>
            <Ionicons size={15} name="arrow-forward" />
          </ArrowButton>
        </InfoTitleContainer>

        <InfoValuesContainer>
          <InfoTextValues>R$ 1.000,00</InfoTextValues>
          <InfoTextValues>Vencimento 10/03</InfoTextValues>
        </InfoValuesContainer>
      </InfoContainer>

      <Divider horizontalInset style={{ width: 1, height: "100%" }} />

      <InfoContainer style={{ alignItems: "flex-start" }}>
        <InfoTitleContainer>
          <InfoTextTitle>Limite Disponivel</InfoTextTitle>
          <ArrowButton>
            <Ionicons size={15} name="arrow-forward" />
          </ArrowButton>
        </InfoTitleContainer>

        <InfoValuesContainer>
          <InfoTextValues>R$ 2.500,00</InfoTextValues>
          <View style={styles.container}>
            <View style={[styles.greenProgress, { width: `${percentage}%` }]} />
            <View
              style={[
                styles.orangeProgress,
                { width: `${remainingPercentage}%` },
              ]}
            />
          </View>
        </InfoValuesContainer>
      </InfoContainer>
    </Container>
  );
};

export default FinancialInfos;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
    overflow: "hidden",
    maxWidth: 100,
  },
  greenProgress: {
    height: "100%",
    backgroundColor: "#FFA500",
  },
  orangeProgress: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});
