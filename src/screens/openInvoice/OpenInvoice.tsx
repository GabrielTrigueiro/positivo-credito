import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { RootStackParamList } from "../../../App";
import theme from "../../styles/theme";
import {
  Container,
  HeaderIncoive,
  InvoiceInfos,
  InvoicePeriod,
  LabelLine,
  LabelValue,
  LineContainer,
  MiniCard,
} from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import DefaultButton from "../../components/defaultButton/DefaultButton";

type Props = NativeStackScreenProps<RootStackParamList, "OpenInvoice">;

const OpenInvoice = ({ navigation, route }: Props) => {
  return (
    <Container>
      <UserHeader navigation={navigation} route={route} />
      <HeaderIncoive>
        <MiniCard
          onPress={() => console.log("Pressed")}
          rippleColor={"#fff"}
          borderless
        >
          <></>
        </MiniCard>
        <InvoicePeriod>
          <Text
            style={{
              color: theme.COLORS.BLUE5,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
              fontSize: 18,
            }}
          >
            Faturas
          </Text>
          <Text
            style={{
              color: theme.COLORS.GRAY3,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
              fontSize: 12,
            }}
          >
            Out - Fev
          </Text>
        </InvoicePeriod>
      </HeaderIncoive>
      <LineChart
        data={{
          labels: ["Jan", "Fer", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => theme.COLORS.BLUE,
          labelColor: (opacity = 1) => theme.COLORS.BLUE,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
      <InvoiceInfos>
        <LineContainer>
          <LabelLine>Vencimento</LabelLine>
          <LabelValue>10 de Dezembro</LabelValue>
        </LineContainer>
        <LineContainer>
          <LabelLine>Valor</LabelLine>
          <LabelValue>R$ 1.000,00</LabelValue>
        </LineContainer>
        <LineContainer>
          <LabelLine>Compras até</LabelLine>
          <LabelValue>--</LabelValue>
        </LineContainer>
        <DefaultButton
          label="Pagar fatura"
          action={() => console.log("Pressed")}
        />
      </InvoiceInfos>
    </Container>
  );
};

export default OpenInvoice;
