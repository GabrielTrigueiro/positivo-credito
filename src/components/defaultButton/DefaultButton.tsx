import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyledButton } from "./styles";
import { useTheme } from "styled-components";

interface IButtonProps {
  label: string;
  action: () => void;
  iconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  isDisabled?: boolean;
  customSize?: number;
}

const DefaultButton = (props: IButtonProps) => {
  const theme = useTheme();
  const { iconName, action, label, isDisabled, customSize } = props;

  return (
    <StyledButton
      icon={iconName}
      mode="contained"
      disabled={isDisabled}
      onPress={action}
      labelStyle={{
        fontSize: customSize ? customSize : 25,
        fontFamily: theme.FONTS.POPPINSMEDIUM,
        paddingTop: 14,
      }}
    >
      {label}
    </StyledButton>
  );
};

export default DefaultButton;
