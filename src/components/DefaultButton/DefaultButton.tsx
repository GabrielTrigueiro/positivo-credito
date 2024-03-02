import * as React from 'react';
import {Button} from 'react-native-paper';
import {MaterialIcons} from "@expo/vector-icons";

interface IButtonProps {
  label: string;
  action: () => void;
  iconName?: React.ComponentProps<typeof MaterialIcons>["name"];
}

const DefaultButton = (props: IButtonProps) => {
  const {iconName, action, label} = props;

  return (
    <Button icon={iconName} mode="contained" onPress={action}>
      {label}
    </Button>
  )
};

export default DefaultButton;