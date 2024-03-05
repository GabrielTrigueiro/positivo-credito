import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import { Divider, List } from "react-native-paper";

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
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import theme from "../../styles/theme";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = () => {
  const theme = useTheme();
  const [full, setFull] = useState(false);

  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const offsetY = contentOffset.y;
    if (offsetY <= 149 && full) {
      setFull(false);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200,
      });
    } else if (offsetY >= 150 && full === false) {
      setFull(true);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200,
      });
    }
  };

  const handeTouchHistoric = () => {
    if (full) {
      setFull(false);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200,
      });
    } else if (full === false) {
      setFull(true);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200,
      });
    }
  };

  return (
    <Container $full={full}>
      <Header>
        <UserHeader />
      </Header>
      <Body>
        <HomeCard />
        <FinancialInfos />
      </Body>

      {full && <HistoricBackDrop></HistoricBackDrop>}
      <HistoricView $full={full}>
        <HistoricButton onPress={handeTouchHistoric}>
          <Ionicons size={15} name={full ? "arrow-down" : "arrow-up"} />
        </HistoricButton>
        <HistoricScroll
          onScrollEndDrag={handleScroll}
          stickyHeaderIndices={[0]}
        >
          <ListHeader>
            <HistoricDivider />
            <ListTitle>
              <MainTitle>Transações</MainTitle>
              <SecondaryTitle>ver todas</SecondaryTitle>
            </ListTitle>
          </ListHeader>
          {Array.from({ length: 20 }).map((_, index) => (
            <List.Item key={index} title={`Item ${index + 1}`} />
          ))}
        </HistoricScroll>
      </HistoricView>
    </Container>
  );
};

export default Home;
