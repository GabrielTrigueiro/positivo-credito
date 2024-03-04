import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const MenuContainer = styled(View)`
  padding-top: ${RFValue(0)}px;
  flex-direction: row;
  justify-content: center;
`;
