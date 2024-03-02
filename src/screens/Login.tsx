import {Container, MainTitle} from "./styles";
import {useState} from "react";
import DefaultTextInput from "../components/DefaultTextInput/DefaultTextInput";
import DefaultButton from "../components/DefaultButton/DefaultButton";

const Login = () => {

  const [loginValue, setLoginValue] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <MainTitle>
        Bem vindo ao App da Positivo
      </MainTitle>
      <DefaultTextInput
        label={"Login"}
        placeholder={"Digite seu login...."}
        inputValue={loginValue}
        onValueChange={setLoginValue}
      />
      <DefaultTextInput
        label={"Senha"}
        placeholder={"Digite sua senha...."}
        inputValue={password}
        onValueChange={setPassword}
      />
      <DefaultButton action={() => {}} label={"Login"} iconName={"login"} />
    </Container>
  )
}

export default Login;