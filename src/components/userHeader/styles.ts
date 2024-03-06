import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const UserInfos = styled(View)`
  background-color: transparent;
  border-radius: ${RFValue(15)}px;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserIPrimaryContainer = styled(View)`
  flex: 1;
  line-height: ${RFValue(10)}px;
`;
export const UserISecondaryContainer = styled(View)`
  gap: ${RFValue(10)}px;
  display: flex;
  flex-direction: row;
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

export const NotificationBadgeContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${RFValue(100)}px;
  padding: ${RFValue(10)}px;
`;
