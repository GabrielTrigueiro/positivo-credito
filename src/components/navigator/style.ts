import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  position: absolute;
  bottom: ${RFValue(20)}px;
  align-self: center;
  border-radius: ${RFValue(30)}px;

  width: ${RFValue(200)}px;
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;
