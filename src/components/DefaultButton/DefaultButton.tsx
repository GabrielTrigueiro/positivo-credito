import * as React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {StyledButton} from "./styles";
import {ButtonProps} from "react-native-paper";

interface IButtonProps {
  label: string;
  action: () => void;
  iconName?: React.ComponentProps<typeof MaterialIcons>["name"];
}

const DefaultButton = (props: IButtonProps) => {
  const {iconName, action, label} = props;

  return (
      <StyledButton icon={iconName} mode="contained" onPress={action}>
        {label}
      </StyledButton>
  )
};

export default DefaultButton;