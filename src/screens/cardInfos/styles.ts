import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  padding: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLUE5};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  text-align: center;
`;

export const Card = styled(LinearGradient)`
  width: 100%;
  max-width: ${RFValue(500)}px;
  height: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${RFValue(30)}px;
  margin: ${RFValue(30)}px auto;
`;

export const CardInfosContainer = styled(View)`
  display: flex;
  margin: ${RFValue(20)}px 0;
`;

export const InfoRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(10)}px 0;
`;

export const InfoName = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY4};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const InfoValue = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ActionsContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: ${RFValue(10)}px;
`;
