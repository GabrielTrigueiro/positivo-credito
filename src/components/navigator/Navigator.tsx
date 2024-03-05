import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container } from "./style";
import { RootStackParamList } from "../../../App";
import DefaultButton from "../defaultButton/DefaultButton";

type INavigatorProps = {
  useNavigate: any;
};

const Navigator = (props: INavigatorProps) => {
  return (
    <Container>
      <DefaultButton
        action={() => props.useNavigate.navigate("CardInfos")}
        label={"Cartão"}
      />
      <DefaultButton
        action={() => props.useNavigate.navigate("FinancialInfos")}
        label={"Financias"}
      />
      <DefaultButton
        action={() => props.useNavigate.navigate("Configuartions")}
        label={"Configuração"}
      />
    </Container>
  );
};

export default Navigator;
