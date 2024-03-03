import styled from "styled-components";
import {Button} from "react-native-paper";
import {RFValue} from "react-native-responsive-fontsize";

export const StyledButton = styled(Button)`
    margin: auto;
    width: ${RFValue(200)}px;
    border-radius: ${RFValue(15)}px;
    background: ${({theme}) => theme.COLORS.BLUE3};
`