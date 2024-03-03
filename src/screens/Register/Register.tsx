import {useState} from "react";

import {BodyContainer, Container, FooterContainer, HeaderContainer, MainTitle, RegisterTitle} from "./styles";
import DefaultTextInput from "../../components/DefaultTextInput/DefaultTextInput";
import DefaultButton from "../../components/DefaultButton/DefaultButton";


const Register = () => {

  const [loginValue, setLoginValue] = useState("")
  const [password, setPassword] = useState("")
  //const [isLoading, setIsLoaging] = useState(false)

  return (
    <Container>
      <HeaderContainer>
        <MainTitle>
          Tornar-se um cliente do PosiCard. Informe todos os seus dados
        </MainTitle>
      </HeaderContainer>
      <RegisterTitle>Cadastrar</RegisterTitle>
      <BodyContainer>
        <DefaultTextInput
          label={"CPF"}
          startIconName={"account-circle"}
          iconColor={"#000"}
          iconSize={10}
          placeholder={"Digite seu login...."}
          inputValue={loginValue}
          onValueChange={setLoginValue}
        />
      </BodyContainer>
      <FooterContainer>
        <DefaultButton action={() => {}} label={"Registrar"}/>
      </FooterContainer>
    </Container>
  )
}

export default Register;