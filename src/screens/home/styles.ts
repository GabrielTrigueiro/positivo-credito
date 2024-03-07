import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(SafeAreaView)<{ $full?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const Header = styled(View)`
  margin-top: ${RFValue(20)}px;
`;
export const Body = styled(View)`
  margin-bottom: ${RFValue(10)}px;
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
  padding: 0 ${RFValue(20)}px;
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

export const HistoricBackDrop = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY3};
  opacity: 0.3;
`;

export const HistoricView = styled(View)<{ $full?: boolean }>`
  position: ${({ $full }) => ($full ? "absolute" : undefined)};
  bottom: ${({ $full }) => ($full ? 0 : undefined)};
  left: ${({ $full }) => ($full ? 0 : undefined)};
  width: ${({ $full }) => ($full ? "100%" : undefined)};
  height: ${({ $full }) => ($full ? "85%" : `${RFValue(250)}px`)};
  background-color: ${({ $full }) => ($full ? "transparent" : undefined)};
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

export const HistoricScroll = styled(ScrollView)`
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HistoricDivider = styled(Divider)`
  width: 90%;
`;
