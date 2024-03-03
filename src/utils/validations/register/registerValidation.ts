import * as yup from "yup";
import {TRegisterClientRequest} from "../../models/client";
import {UtilityFunctions} from "../../utilityFunctions";

const passwordConfirmationValidator = (value: string | undefined, context: yup.TestContext): boolean => {
  if(value)
  return value === context.parent.password;
  else return false
};

// Schema de validação usando Yup
const registerClientSchema = yup.object<TRegisterClientRequest>().shape({
  document: yup
    .string()
    .required("O CPF é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .test('password-match', 'As senhas precisam ser iguais', passwordConfirmationValidator)
    .required('A confirmação de senha é obrigatória'),
});

export default registerClientSchema;