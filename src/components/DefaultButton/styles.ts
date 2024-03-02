import styled from "styled-components";
import {Button} from "react-native-paper";

export const StyledButton = styled(Button)`
    width: 100%;
    background: ${({theme}) => theme.COLORS.BLUE4};
    border-radius: 10px;
`