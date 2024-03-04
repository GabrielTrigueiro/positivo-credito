import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Body, Container, Header } from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import HomeCard from "../../components/homeCard/HomeCard";
import FinancialInfos from "../../components/financialInfos/FinancialInfos";
import { List } from "react-native-paper";

const Home = () => {
  const [full, setFull] = useState(false);

  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const offsetY = contentOffset.y;

    if (offsetY <= 40) {
      setFull(false);
    } else if (offsetY >= 0) {
      setFull(true);
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
        onScroll={handleScroll}
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

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  fullScrollView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: height,
    backgroundColor: "blue",
  },
  partialScrollView: {
    height: 200,
    backgroundColor: "red",
  },
});
