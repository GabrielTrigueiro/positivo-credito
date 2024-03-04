import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const CardView = styled(View)`
  padding: 0 ${RFValue(35)}px;
  margin: auto;
  margin-top: ${RFValue(20)}px;

  width: ${RFValue(320)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFValue(50)}px;

  display: flex;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const CardText = styled(Text)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(10)}px;
`;
