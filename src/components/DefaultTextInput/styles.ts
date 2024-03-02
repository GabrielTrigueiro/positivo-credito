import styled from "styled-components";
import {TextInput} from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize"

export const StyledTextInput = styled(TextInput)`
    width: ${RFValue(290)}px;
    height: ${RFValue(60)}px;
    display: flex;
    justify-content: center;
`