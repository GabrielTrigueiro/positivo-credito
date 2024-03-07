import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  ActionsContainer,
  Card,
  CardInfosContainer,
  Container,
  InfoName,
  InfoRow,
  InfoValue,
  Title,
} from "./styles";
import { RootStackParamList } from "../../../App";
import DefaultButton from "../../components/defaultButton/DefaultButton";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

type Props = NativeStackScreenProps<RootStackParamList, "CardInfos">;

const CardInfos = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Title>Detalhes do cartão</Title>
      <Card
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
        }}
      ></Card>
      <CardInfosContainer>
        <InfoRow>
          <InfoName>Nome</InfoName>
          <InfoValue>Matheus Tardelly</InfoValue>
        </InfoRow>
        <InfoRow>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <InfoName>Número</InfoName>
            <TouchableOpacity>
              <Ionicons
                name="copy-outline"
                size={15}
                color={theme.COLORS.BLUE}
              />
            </TouchableOpacity>
          </View>

          <InfoValue>.... .... .... 2138</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoName>Código</InfoName>
          <InfoValue>179</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoName>Válido</InfoName>
          <InfoValue>10/2029</InfoValue>
        </InfoRow>
      </CardInfosContainer>
      <ActionsContainer>
        <DefaultButton
          customSize={RFValue(20)}
          label="Bloquear"
          action={() => {}}
        />
        <DefaultButton
          customSize={RFValue(20)}
          label="Deletar cartão"
          action={() => {}}
        />
      </ActionsContainer>
    </Container>
  );
};

export default CardInfos;
