import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${RFValue(30)}px ${RFValue(5)}px;
  gap: ${RFValue(10)}px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLUE5};
  margin-bottom: 20px;
  text-align: center;
`;

export const Option = styled(View)`
  display: flex;
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

export const OptionIcon = styled(View)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY6};
`;

export const OptionText = styled(Text)`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.COLORS.BLUE5};
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
