import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  position: absolute;
  bottom: ${RFValue(20)}px;
  align-self: center;
  border-radius: ${RFValue(30)}px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${RFValue(60)}px;

  width: ${RFValue(300)}px;
  padding: ${RFValue(20)}px ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const IconNavButton = styled(TouchableOpacity)`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(100)}px;
`;
