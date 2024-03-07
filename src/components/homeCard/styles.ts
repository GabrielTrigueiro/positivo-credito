import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const CardView = styled(LinearGradient)<{ isPressed?: boolean }>`
  padding: 0 ${RFValue(35)}px;
  margin: auto;
  margin-top: ${RFValue(20)}px;

  width: ${RFValue(310)}px;
  height: ${RFValue(130)}px;
  border-radius: ${RFValue(50)}px;

  display: flex;
  justify-content: flex-end;

  opacity: ${({ isPressed }) => (isPressed ? 0.1 : 1)};
`;

export const CardText = styled(Text)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(10)}px;
`;
