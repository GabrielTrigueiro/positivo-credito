import { Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  padding-top: ${RFValue(30)}px;
  align-items: center;
`;

export const AvatarButton = styled(TouchableOpacity)`
  display: flex;
  margin: 0 auto;
`;
export const AvatarNameButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: ${RFValue(10)}px;
  margin: 0 auto;
`;

export const AvatarName = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLUE5};
  margin-bottom: ${RFValue(20)}px;
  text-align: center;
`;

export const Option = styled(TouchableOpacity)`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(20)}px ${RFValue(30)}px;
  border-radius: 10px;
`;

export const OptionContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(15)}px;
`;

export const OptionText = styled(Text)`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.COLORS.BLUE5};
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const DeletAcountButton = styled(TouchableOpacity)`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY6};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(50)}px;
`;
