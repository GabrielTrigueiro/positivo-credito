import { Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderIncoive = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: ${RFValue(20)}px;
`;

export const MiniCard = styled(TouchableRipple)`
  width: ${RFValue(150)}px;
  height: ${RFValue(70)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${RFValue(50)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const InvoicePeriod = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`;

export const InvoiceInfos = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: ${RFValue(40)}px ${RFValue(20)}px;
  gap: ${RFValue(30)}px;
`;

export const LineContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelLine = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY3};
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  font-size: ${RFValue(16)}px;
`;

export const LabelValue = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
  font-size: ${RFValue(12)}px;
`;
