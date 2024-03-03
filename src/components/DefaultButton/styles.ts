import styled from "styled-components";
import {Button} from "react-native-paper";
import {RFValue} from "react-native-responsive-fontsize";

export const StyledButton = styled(Button)`
    background: ${({theme}) => theme.COLORS.BLUE4};
    height: ${RFValue(50)}px;
    border-radius: 10px;
    width: ${RFValue(200)}px;
    margin: auto;
`