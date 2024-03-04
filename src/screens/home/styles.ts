import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const Header = styled(View)`
  margin-top: ${RFValue(20)}px;
`;
export const Body = styled(View)``;
