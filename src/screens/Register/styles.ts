import styled from "styled-components";
import {View, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize"

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    background: ${({theme}) => theme.COLORS.WHITE_100};
    gap: ${RFValue(5)}px;
`
export const MainTitle = styled(Text)`
    text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.BLACK};
`;

export const RegisterTitle = styled(Text)`
    width: 100%;
    text-align: center;
    padding: ${RFValue(15)}px;
    background-color: #FCCE0878;
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`;


export const HeaderContainer = styled(View)`
    margin-top: ${RFValue(25)}%;
    margin-bottom: ${RFValue(10)}%;
`
export const BodyContainer = styled(View)`
    gap: ${RFValue(5)}px;
    margin-bottom: ${RFValue(10)}%;
`
export const FooterContainer = styled(View)`
    flex: 1;
    width: 100%;
    display: flex;
`