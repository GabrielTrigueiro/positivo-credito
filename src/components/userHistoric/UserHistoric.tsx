import React, { useRef } from "react";
import { Animated, Button, ScrollView } from "react-native";
import { Container, ListTitle, MainTitle, SecondaryTitle } from "./styles";
import { List } from "react-native-paper";

const UserHistoric = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

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
      <ScrollView onScroll={handleScroll} stickyHeaderIndices={[1]}>
        {Array.from({ length: 20 }).map((_, index) => (
          <List.Item key={index} title={`Item ${index + 1}`} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default UserHistoric;
