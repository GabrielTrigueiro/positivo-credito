import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { Container, ListTitle, MainTitle, SecondaryTitle } from "./styles";

const UserHistoric = () => {
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      console.log("Scrolado para cima");
    }
  };

  return (
    <Container>
      <ListTitle>
        <MainTitle>Transações</MainTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
      </ListTitle>
      <ScrollView onScroll={handleScroll}>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
        <SecondaryTitle>ver todas</SecondaryTitle>
      </ScrollView>
    </Container>
  );
};

export default UserHistoric;
