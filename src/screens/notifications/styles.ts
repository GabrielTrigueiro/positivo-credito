import { View, Text, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLUE5};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  text-align: center;
`;

export const NotificationContainer = styled(ScrollView)`
  flex: 1;
  max-height: 80svh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${RFValue(10)}px;
`;

export const NotificationRowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  padding: ${RFValue(6)}px ${RFValue(10)}px;
  border-radius: ${RFValue(20)}px;
  margin: ${RFValue(5)}px ${RFValue(10)}px;
`;

export const InfosPartition = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
