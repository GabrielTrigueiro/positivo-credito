import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "styled-components";
import theme from "../../styles/theme";
import { Body, Container, Header } from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";
import { IMenuItems } from "../../components/defaultMenu";
import DefaultMenu from "../../components/defaultMenu/DefaultMenu";
import { Avatar } from "react-native-paper";
import HomeCard from "../../components/homeCard/HomeCard";

const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <ScrollView style={{ flex: 1, display: "flex" }}>
        <Header>
          <UserHeader />
        </Header>
        <Body>
          <HomeCard />
        </Body>
      </ScrollView>
    </Container>
  );
};

export default Home;
