import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "styled-components";
import theme from "../../styles/theme";
import { Container } from "./styles";
import UserHeader from "../../components/userHeader/UserHeader";

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <ScrollView>
        <UserHeader />
      </ScrollView>
    </Container>
  );
};

export default Home;
