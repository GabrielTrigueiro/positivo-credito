import { Avatar, Badge } from "react-native-paper";
import {
  NotificationBadgeContainer,
  UserIPrimaryContainer,
  UserISecondaryContainer,
  UserInfos,
  UserName,
  UserStatus,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { RootStackParamList } from "../../../App";
import { TNavigatorProps } from "../navigator";
import { TouchableOpacity } from "react-native";

const UserHeader = <T extends keyof RootStackParamList>({
  navigation,
  route,
  show,
}: TNavigatorProps<T>) => {
  const theme = useTheme();
  return (
    <UserInfos>
      <UserIPrimaryContainer>
        <UserName>John Doe</UserName>
        <UserStatus>ativo</UserStatus>
      </UserIPrimaryContainer>
      <UserISecondaryContainer>
        <NotificationBadgeContainer
          onPress={() => navigation.navigate("Notifications")}
        >
          <Badge size={15} style={{ top: 0, right: 0, position: "absolute" }}>
            2
          </Badge>
          <Ionicons name="notifications" size={20} color={theme.COLORS.GRAY3} />
        </NotificationBadgeContainer>
        <TouchableOpacity onPress={() => navigation.navigate("UserOptions")}>
          <Avatar.Image
            size={50}
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{ backgroundColor: "#fff" }}
          />
        </TouchableOpacity>
      </UserISecondaryContainer>
    </UserInfos>
  );
};

export default UserHeader;
