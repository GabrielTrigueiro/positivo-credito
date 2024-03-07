import { Text, View, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  margin: auto;
  margin-top: ${RFValue(20)}px;
  display: flex;
  flex-direction: row;
`;

export const InfoContainer = styled(TouchableOpacity)`
  flex: 1;
  display: flex;
  align-items: start;
  padding: ${RFValue(10)}px;
`;

export const InfoTitleContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${RFValue(5)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const InfoTextTitle = styled(Text)`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const InfoValuesContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoTextValues = styled(Text)`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY3};
`;

export const ArrowButton = styled(TouchableOpacity)``;
