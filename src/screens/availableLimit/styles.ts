import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  display: flex;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLUE5};
  text-align: center;
  margin-top: ${RFValue(100)}px;
`;

export const TotalLimit = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
  margin-top: ${RFValue(10)}px;
`;
