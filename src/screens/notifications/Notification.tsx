import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  Container,
  InfosPartition,
  NotificationContainer,
  NotificationRowContainer,
  Title,
} from "./styles";
import { RootStackParamList } from "../../../App";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useState } from "react";
import { formatCurrency } from "../../utils/utilityFunctions";
interface IInfoProps {
  date: string;
  type: "gain" | "loss";
  amount: number;
  entity: string;
  category: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

const NotificationRow = (props: IInfoProps) => {
  const { amount, category, date, entity, type } = props;
  const theme = useTheme();

  return (
    <NotificationRowContainer
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}
    >
      <InfosPartition>
        <Text
          style={{
            fontSize: 12,
            color: theme.COLORS.GRAY4,
            fontFamily: theme.FONTS.POPPINSREGULAR,
          }}
        >
          {date}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: theme.COLORS.BLACK,
            fontFamily: theme.FONTS.POPPINSREGULAR,
          }}
        >
          {entity} - R$ {formatCurrency(amount)}.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: theme.COLORS.GRAY4,
            fontFamily: theme.FONTS.POPPINSREGULAR,
          }}
        >
          {category}
        </Text>
      </InfosPartition>
      <Ionicons
        size={30}
        name={
          type === "gain"
            ? "arrow-up-circle-outline"
            : "arrow-down-circle-outline"
        }
        color={type === "gain" ? theme.COLORS.GREEN1 : theme.COLORS.RED}
      />
    </NotificationRowContainer>
  );
};

const Notifications = ({ navigation, route }: Props) => {
  const placeholderData: IInfoProps[] = [
    {
      amount: 124,
      category: "Transferência",
      date: "10/10/2021",
      entity: "Lila",
      type: "gain",
    },
    {
      amount: 231,
      category: "Taxa",
      date: "10/10/2021",
      entity: "Uber",
      type: "loss",
    },
    {
      amount: 432,
      category: "Compra",
      date: "10/10/2021",
      entity: "Prada",
      type: "loss",
    },
    {
      amount: 654,
      category: "Taxa",
      date: "10/10/2021",
      entity: "Uber",
      type: "loss",
    },
    {
      amount: 1424,
      category: "Transferência",
      date: "10/10/2021",
      entity: "Lila",
      type: "gain",
    },
    {
      amount: 754,
      category: "Taxa",
      date: "10/10/2021",
      entity: "Uber",
      type: "loss",
    },
    {
      amount: 435,
      category: "Alimentação",
      date: "10/10/2021",
      entity: "McDonalds",
      type: "loss",
    },
    {
      amount: 344,
      category: "Compra",
      date: "10/10/2021",
      entity: "Prada",
      type: "loss",
    },
  ];
  return (
    <Container>
      <Title>Notificações</Title>
      <NotificationContainer>
        {placeholderData.map((info, index) => (
          <NotificationRow key={index} {...info} />
        ))}
      </NotificationContainer>
    </Container>
  );
};

export default Notifications;
