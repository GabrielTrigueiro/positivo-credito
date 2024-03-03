import * as React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {StyledButton} from "./styles";
import {useTheme} from "styled-components";

interface IButtonProps {
  label: string;
  action: () => void;
  iconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  isDisabled?: boolean;
}

const DefaultButton = (props: IButtonProps) => {
  const theme = useTheme();
  const {iconName, action, label, isDisabled} = props;

  return (
    <StyledButton
      icon={iconName}
      mode="contained"
      disabled={isDisabled}
      onPress={action}

      labelStyle={{
        fontSize: 25,
        fontFamily: theme.FONTS.POPPINSMEDIUM,
        paddingTop: 14,
      }}
    >
      {label}
    </StyledButton>
  )
};

export default DefaultButton;