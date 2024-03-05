import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import { List } from "react-native-paper";

import { Body, Container, Header } from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import HomeCard from "../../components/homeCard/HomeCard";
import FinancialInfos from "../../components/financialInfos/FinancialInfos";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = () => {
  const [full, setFull] = useState(false);

  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const offsetY = contentOffset.y;
    if (offsetY <= 149) {
      setFull(false);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200, // Defina a duração da animação para 200 milissegundos
      });
    } else if (offsetY >= 150) {
      setFull(true);
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 200, // Defina a duração da animação para 200 milissegundos
      });
    }
  };

  return (
    <Container>
      <Header>
        <UserHeader />
      </Header>
      <Body>
        <HomeCard />
        <FinancialInfos />
      </Body>

      <ScrollView
        onScrollEndDrag={handleScroll}
        style={full ? styles.fullScrollView : styles.partialScrollView}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <List.Item key={index} title={`Item ${index + 1}`} />
        ))}
      </ScrollView>
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
    height: "80%",
    padding: 20,

    backgroundColor: "#fff",
  },
  partialScrollView: {
    height: 200,
    padding: 20,
  },
});
