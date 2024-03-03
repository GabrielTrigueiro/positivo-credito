import {useFormik} from "formik";

import {BodyContainer, Container, FooterContainer, HeaderContainer, MainTitle, RegisterTitle} from "./styles";
import DefaultTextInput from "../../components/defaultTextInput/DefaultTextInput";
import DefaultButton from "../../components/defaultButton/DefaultButton";
import {TRegisterClientRequest} from "../../utils/models/client";
import registerClientSchema from "../../utils/validations/register/registerValidation";


const Register = () => {

  const initialValues: TRegisterClientRequest = {
    document: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const formik = useFormik({
    initialValues,
    validationSchema: registerClientSchema,
    onSubmit: ((values) => console.log(values)),
  });

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
          label={"CPF/CNPJ"}
          placeholder={"Digite seu login...."}

          inputValue={formik.values.document}
          onValueChange={formik.handleChange('document')}
          error={formik.touched.document && Boolean(formik.errors.document)}
          helperText={formik.touched.document && formik.errors.document}

          iconColor={"#000"}
          iconSize={10}
          startIconName={"account-circle"}
        />

        <DefaultTextInput
          label={"E-mail"}
          placeholder={"Digite seu email...."}

          inputValue={formik.values.email}
          onValueChange={formik.handleChange('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}

          iconColor={"#000"}
          iconSize={10}
          startIconName={"mail"}
        />

        <DefaultTextInput
          label={"Senha"}
          placeholder={"Digite sua senha...."}
          security={true}
          inputValue={formik.values.password}
          onValueChange={formik.handleChange('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}

          iconColor={"#000"}
          iconSize={10}
          startIconName={"key"}
        />

        <DefaultTextInput
          label={"Confirmar senha"}
          placeholder={"Confirme sua senha...."}
          security={true}
          inputValue={formik.values.confirmPassword}
          onValueChange={formik.handleChange('confirmPassword')}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}

          iconColor={"#000"}
          iconSize={10}
          startIconName={"key"}
        />
      </BodyContainer>
      <FooterContainer>
        <DefaultButton action={() => formik.submitForm()} label={"Registrar"}/>
      </FooterContainer>
    </Container>
  )
}

export default Register;