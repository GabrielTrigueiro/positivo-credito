import React from "react"
import {TextInputProps} from "react-native-paper";
import {MaterialIcons} from "@expo/vector-icons";
import {StyledTextInput} from "./styles";

interface IProps extends TextInputProps {
  label: string;
  inputValue: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>
  startIconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  endIconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  iconSize?: number;
  iconColor?: string;
}

const DefaultTextInput = (props: IProps) => {
  const MyComponent = () => {

  }
  const {label, inputValue, onValueChange, iconColor, iconSize, startIconName, endIconName} = props;

  return (
    <StyledTextInput
      mode={"outlined"}
      label={label}
      value={inputValue}
      onChangeText={text => onValueChange(text)}
      left={startIconName && <MaterialIcons name={startIconName} size={iconSize} color={iconColor}/>}

    />
  )
}

export default DefaultTextInput;