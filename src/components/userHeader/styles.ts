import { View, Text, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const UserInfos = styled(View)`
  background-color: transparent;
  border-radius: ${RFValue(15)}px;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
`;

export const UserName = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  font-size: ${RFValue(20)}px;
`;

export const UserStatus = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY3};
  font-size: ${RFValue(13)}px;
`;
