import {
  BodyContainer,
  Container,
  FooterContainer,
  HeaderContainer,
  MainTitle,
} from "./styles";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import DefaultTextInput from "../../components/defaultTextInput/DefaultTextInput";
import DefaultButton from "../../components/defaultButton/DefaultButton";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ route, navigation }: Props) => {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoading, setIsLoaging] = useState(false)

  return (
    <Container>
      <HeaderContainer>
        <MainTitle>Bem vindo ao App da Positivo</MainTitle>
      </HeaderContainer>
      <BodyContainer>
        <DefaultTextInput
          label={"Login"}
          startIconName={"email"}
          iconColor={"#000"}
          iconSize={10}
          placeholder={"Digite seu login...."}
          inputValue={loginValue}
          onValueChange={setLoginValue}
        />
        <DefaultTextInput
          label={"Senha"}
          startIconName={"key"}
          iconColor={"#000"}
          iconSize={10}
          placeholder={"Digite sua senha...."}
          inputValue={password}
          onValueChange={setPassword}
          security={true}
        />
      </BodyContainer>
      <FooterContainer>
        <DefaultButton
          action={() => navigation.navigate("Home")}
          label={"Entrar"}
        />
      </FooterContainer>
    </Container>
  );
};

export default Login;
