import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  height: ${RFValue(200)}px;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFValue(20)}px;
  flex: 1;
`;

export const ListTitle = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const MainTitle = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const SecondaryTitle = styled(Text)`
  font-size: ${RFValue(13)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;
