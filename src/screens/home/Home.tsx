import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import { Body, Container, Header } from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import HomeCard from "../../components/homeCard/HomeCard";
import FinancialInfos from "../../components/financialInfos/FinancialInfos";
import UserHistoric from "../../components/userHistoric/UserHistoric";

const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <UserHeader />
      </Header>
      <Body>
        <HomeCard />
        <FinancialInfos />
      </Body>
      <UserHistoric />
    </Container>
  );
};

export default Home;
