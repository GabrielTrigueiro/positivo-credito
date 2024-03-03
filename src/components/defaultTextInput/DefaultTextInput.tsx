import React, {useState} from "react"
import {HelperText, TextInput, TextInputProps} from "react-native-paper";
import {MaterialIcons} from "@expo/vector-icons";
import {useTheme} from "styled-components";

import {StyledTextInput} from "./styles";
import {Text} from "react-native";

interface IProps extends TextInputProps {
  label: string;
  inputValue: string;
  onValueChange: any;

  error?: boolean | undefined;
  helperText?: React.ReactNode;

  startIconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  endIconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  iconSize?: number;
  iconColor?: string;
  security?: boolean;
}

const DefaultTextInput = (props: IProps) => {

  const theme = useTheme();

  const {
    label,
    helperText,
    error,
    inputValue,
    onValueChange,
    iconColor,
    iconSize,
    startIconName,
    endIconName,
    security,
    ...rest
  } = props;

  const [showPass, setShowPass] = useState(false)

  return (
    <>
      <StyledTextInput
        {...rest}
        label={label}
        value={inputValue}
        secureTextEntry={showPass}
        mode={"outlined"}
        theme={{
          colors: { primary: theme.COLORS.BLUE, background: theme.COLORS.GRAY6, outline: "transparent" },
          roundness: 10,
        }}
        placeholderTextColor={theme.COLORS.GRAY3}
        onChange={onValueChange}
        left={startIconName && <TextInput.Icon style={{ paddingTop: 10 }} icon={startIconName} />}
        right={
          security && (
            <TextInput.Icon
              style={{ paddingTop: 10 }}
              onPress={() => setShowPass(!showPass)}
              icon={showPass ? "eye" : "eye-off"}
            />
          )
        }
        error={error}
      />
      {error && helperText && <HelperText visible={!!helperText}  type={"error"}>{helperText}</HelperText >}
    </>
  )
}

export default DefaultTextInput;