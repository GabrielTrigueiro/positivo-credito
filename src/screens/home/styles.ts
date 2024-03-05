import { Text, TouchableOpacity, View } from "react-native";
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
export const Body = styled(View)`
  margin-bottom: ${RFValue(20)}px;
`;

export const ListHeader = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const ListTitle = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
  height: ${RFValue(50)}px;
  background: ${({ theme }) => theme.COLORS.WHITE};
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

export const HistoricButton = styled(TouchableOpacity)`
  width: ${RFValue(50)}px;
  margin-right: auto;
  margin-left: auto;

  background: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY5};
  border-bottom-width: 0; /* Para remover a borda na parte inferior */

  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
`;
