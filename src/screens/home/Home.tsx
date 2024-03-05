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
  HistoricButton,
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

      {full && <View style={styles.miniCard}></View>}
      <View style={full ? styles.fullScrollView : styles.partialScrollView}>
        <HistoricButton
          style={{ alignSelf: "center" }}
          onPress={handeTouchHistoric}
        >
          <Ionicons size={15} name={full ? "arrow-down" : "arrow-up"} />
        </HistoricButton>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          onScrollEndDrag={handleScroll}
          stickyHeaderIndices={[0]}
        >
          <ListHeader>
            <Divider style={{ width: "90%" }} />
            <ListTitle>
              <MainTitle>Transações</MainTitle>
              <SecondaryTitle>ver todas</SecondaryTitle>
            </ListTitle>
          </ListHeader>
          {Array.from({ length: 20 }).map((_, index) => (
            <List.Item key={index} title={`Item ${index + 1}`} />
          ))}
        </ScrollView>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  fullScrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "85%",
    backgroundColor: "transparent",
    zIndex: 100,
  },
  partialScrollView: {
    height: 200,
  },
  miniCard: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: theme.COLORS.GRAY3,
    opacity: 0.3,
  },
});
