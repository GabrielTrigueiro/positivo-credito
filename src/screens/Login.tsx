import {BodyContainer, Container, FooterContainer, HeaderContainer, MainTitle} from "./styles";
import {useState} from "react";
import DefaultTextInput from "../components/DefaultTextInput/DefaultTextInput";
import DefaultButton from "../components/DefaultButton/DefaultButton";

const Login = () => {

  const [loginValue, setLoginValue] = useState("")
  const [password, setPassword] = useState("")
  //const [isLoading, setIsLoaging] = useState(false)

  return (
    <Container>
      <HeaderContainer>
        <MainTitle>
          Bem vindo ao App da Positivo
        </MainTitle>
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
        <DefaultButton action={() => {}} label={"Login"} iconName={"login"} />
      </FooterContainer>
    </Container>
  )
}

export default Login;