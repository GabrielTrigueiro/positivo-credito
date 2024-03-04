import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Button,
  Menu,
  Divider,
  PaperProvider,
  Avatar,
  Text,
} from "react-native-paper";
import { MenuContainer } from "./styles";

export interface IMenuItems {
  label: string;
  action: () => void;
}

interface IMenuProps {
  status: boolean;
  handleChangeStatus: () => void;
  items: IMenuItems[];
}

const DefaultMenu = (props: IMenuProps) => {
  const { handleChangeStatus, items, status } = props;
  return (
    <>
      <TouchableOpacity
        onPress={() => handleChangeStatus()}
        style={{ position: "absolute", right: 10, top: 20 }}
      >
        <Avatar.Image size={50} source={{ uri: "https://i.pravatar.cc/100" }} />
      </TouchableOpacity>
      <PaperProvider>
        <MenuContainer>
          <Menu
            visible={status}
            onDismiss={() => handleChangeStatus()}
            anchor={{ x: 10, y: 10 }}
          >
            {items.map((item, index) => (
              <Menu.Item key={index} onPress={item.action} title={item.label} />
            ))}
          </Menu>
        </MenuContainer>
      </PaperProvider>
    </>
  );
};

export default DefaultMenu;
