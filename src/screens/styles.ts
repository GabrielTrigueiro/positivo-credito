import styled from "styled-components";
import {View, Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    padding: ${RFValue(5)}%;
    background: ${({theme}) => theme.COLORS.WHITE_100};
    gap: ${RFValue(5)}px;
`
export const MainTitle = styled(Text)`
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(150)}px;
    text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;