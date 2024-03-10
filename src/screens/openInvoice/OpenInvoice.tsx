import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

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

type Pointer = {
  height?: number; // default: 0
  width?: number; // default: 0
  radius?: number; // default: 5
  pointerColor?: string; // default: 'red'
  pointer1Color?: string; // default: 'red'
  pointer2Color?: string; // default: 'red'
  pointer3Color?: string; // default: 'red'
  pointer4Color?: string; // default: 'red'
  pointer5Color?: string; // default: 'red'
  secondaryPointerColor?: string; // default: 'red'
  pointerComponent?: Function; // default: null
  showPointerStrip?: boolean; // default: true
  pointerStripWidth?: number; // default: containerHeight
  pointerStripHeight?: number; // default: 1
  pointerStripColor?: string; // default: 'black'
  pointerStripUptoDataPoint?: boolean; // default: false
  pointerLabelComponent?: Function; // default: null
  stripOverPointer?: boolean; // default: false
  shiftPointerLabelX?: number; // default: 0
  shiftPointerLabelY?: number; // default: 0
  pointerLabelWidth?: number; // default: 20
  pointerLabelHeight?: number; // default: 20
  autoAdjustPointerLabelPosition?: boolean; // default: false
  pointerVanishDelay?: number; // default: 150
  activatePointersOnLongPress?: boolean; // default: false
  activatePointersDelay?: number; // default: 150
  initialPointerIndex?: number; // default -1
  initialPointerAppearDelay?: number; // if isAnimated, then animationDuration, else 0
  persistPointer?: boolean; // false
  hidePointer1?: boolean; // default: false
  hidePointer2?: boolean; // default: false
  hidePointer3?: boolean; // default: false
  hidePointer4?: boolean; // default: false
  hidePointer5?: boolean; // default: false
  hideSecondaryPointer?: boolean; // default: false
  strokeDashArray?: Array<number>;
  barTouchable?: boolean; //default : false (only applicable to bar charts having pointerConfig)
  pointerEvents?: "box-none" | "none" | "box-only" | "auto"; // default: "none
};

const CustomPointer: Pointer = {
  pointerColor: theme.COLORS.GREEN1,
  pointerStripColor: theme.COLORS.BLUE,
  pointerStripWidth: 5,
  // pointerVanishDelay: 2000,
  persistPointer: true,
  autoAdjustPointerLabelPosition: true,
  activatePointersDelay: 1000,
  pointerLabelComponent: (props: any) => {
    return (
      <View
        style={{
          backgroundColor: theme.COLORS.GREEN1,
          padding: 5,
          borderRadius: 10,
          width: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.POPPINSREGULAR,
            fontSize: 12,
          }}
        >
          {props[0].value.toFixed(2)}
        </Text>
      </View>
    );
  },
};

const OpenInvoice = ({ navigation, route }: Props) => {
  const data = [
    { value: Math.random() * 10 },
    { value: Math.random() * 10 },
    { value: Math.random() * 10 },
    { value: Math.random() * 10 },
  ];
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
      <View
        style={{
          display: "flex",
          paddingRight: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LineChart
          height={150}
          adjustToWidth
          data={data}
          areaChart
          dataPointsRadius={5}
          dataPointsColor={theme.COLORS.BLUE}
          lineGradientEndColor="fff"
          color={theme.COLORS.BLUE}
          startFillColor="#FCCE08"
          endFillColor="#fff"
          startOpacity={1}
          endOpacity={0.5}
          thickness={3}
          hideYAxisText
          hideAxesAndRules
          curved
          pointerConfig={CustomPointer}
        />
      </View>
      {/* <LineChart
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
      /> */}
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
