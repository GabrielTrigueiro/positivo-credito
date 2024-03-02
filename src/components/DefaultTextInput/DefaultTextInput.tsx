import React, {useState} from "react"
import {TextInput, TextInputProps} from "react-native-paper";
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
  security?: boolean;
}

const DefaultTextInput = (props: IProps) => {

  const {label, inputValue, onValueChange, iconColor, iconSize, startIconName, endIconName, security, ...rest} = props;

  const [showPass, setShowPass] = useState(false)

  return (
    <StyledTextInput
      {...rest}
      mode={"outlined"}
      label={label}
      value={inputValue}
      onChangeText={text => onValueChange(text)}
      left={startIconName && <TextInput.Icon icon={startIconName}/>}
      secureTextEntry={showPass}
      right={security &&
          <TextInput.Icon onPress={() => setShowPass(!showPass)} icon={showPass ? "eye" : "eye-off"}/>}
    />
  )
}

export default DefaultTextInput;