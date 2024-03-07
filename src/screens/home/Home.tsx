import React, { useState } from "react";
import { LayoutAnimation, Platform, Text, UIManager, View } from "react-native";

import {
  Body,
  Container,
  Header,
  HistoricBackDrop,
  HistoricButton,
  HistoricDivider,
  HistoricScroll,
  HistoricView,
  ListHeader,
  ListTitle,
  MainTitle,
  SecondaryTitle,
} from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import HomeCard from "../../components/homeCard/HomeCard";
import FinancialInfos from "../../components/financialInfos/FinancialInfos";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Navigator from "../../components/navigator/Navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

interface IHistoricItem {
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  title: string;
  value: string;
  class: string;
}

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = ({ navigation, route }: Props) => {
  const [full, setFull] = useState(false);
  const toggleHistoric = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.easeInEaseOut,
      duration: 400,
    });
  };

  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const offsetY = contentOffset.y;
    console.log(offsetY);
    if (offsetY >= 200) {
      setFull(true);
      toggleHistoric();
    } else if (offsetY === 0) {
      setFull(false);
      toggleHistoric();
    }
  };

  const handeTouchHistoric = () => {
    if (full) {
      setFull(false);
      toggleHistoric();
    } else if (full === false) {
      setFull(true);
      toggleHistoric();
    }
  };

  const historicPlaceholder: IHistoricItem[] = [
    {
      class: "Assinatura",
      icon: "attach-money",
      title: "Netflix",
      value: "R$ 32,90",
    },
    {
      class: "Compra",
      icon: "attach-money",
      title: "Adidas",
      value: "R$ 32,90",
    },
    {
      class: "Taxa",
      icon: "attach-money",
      title: "Paypal",
      value: "R$ 32,90",
    },
    {
      class: "Taxa",
      icon: "attach-money",
      title: "Paypal",
      value: "R$ 32,90",
    },
    {
      class: "Compra",
      icon: "attach-money",
      title: "Prada",
      value: "R$ 32,90",
    },
    {
      class: "Parcela",
      icon: "attach-money",
      title: "Apple",
      value: "R$ 32,90",
    },
    {
      class: "Pix",
      icon: "attach-money",
      title: "Transferência",
      value: "R$ 32,90",
    },
    {
      class: "Compra",
      icon: "attach-money",
      title: "Uber",
      value: "R$ 32,90",
    },
    {
      class: "Parcela",
      icon: "attach-money",
      title: "Apple",
      value: "R$ 32,90",
    },
    {
      class: "Pix",
      icon: "attach-money",
      title: "Transferência",
      value: "R$ 32,90",
    },
    {
      class: "Compra",
      icon: "attach-money",
      title: "Uber",
      value: "R$ 32,90",
    },
  ];

  return (
    <Container $full={full}>
      <Header>
        <UserHeader navigation={navigation} route={route} />
      </Header>
      <Body>
        <HomeCard navigation={navigation} route={route} />
        <FinancialInfos />
      </Body>
      {full && <HistoricBackDrop></HistoricBackDrop>}
      <HistoricView style={{ zIndex: full ? 100 : 0 }} $full={full}>
        <HistoricButton onPress={handeTouchHistoric}>
          <Ionicons size={15} name={full ? "arrow-down" : "arrow-up"} />
        </HistoricButton>
        <HistoricScroll
          onMomentumScrollBegin={handleScroll}
          stickyHeaderIndices={[0]}
        >
          <ListHeader>
            <HistoricDivider />
            <ListTitle>
              <MainTitle>Transações</MainTitle>
              <SecondaryTitle>ver todas</SecondaryTitle>
            </ListTitle>
          </ListHeader>
          {historicPlaceholder.map((item, index) => (
            <HistoricItem key={index} {...item} />
          ))}
        </HistoricScroll>
      </HistoricView>
      <Navigator navigation={navigation} route={route} />
    </Container>
  );
};

export default Home;

const HistoricItem = (props: IHistoricItem) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomColor: "rgba(0,0,0,0.1)",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#000",
            width: 30,
            height: 30,
            borderRadius: 200,
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name={props.icon} size={25} color={"#fff"} />
        </View>
        <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Text>{props.title}</Text>
          <Text>{props.class}</Text>
        </View>
      </View>
      <Text>{props.value}</Text>
    </View>
  );
};
