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

const UserHeader = () => {
  const theme = useTheme();
  return (
    <UserInfos>
      <UserIPrimaryContainer>
        <UserName>John Doe</UserName>
        <UserStatus>ativo</UserStatus>
      </UserIPrimaryContainer>
      <UserISecondaryContainer>
        <NotificationBadgeContainer>
          <Badge size={15} style={{ top: 0, right: 0, position: "absolute" }}>
            2
          </Badge>
          <Ionicons name="notifications" size={20} color={theme.COLORS.GRAY3} />
        </NotificationBadgeContainer>
        <Avatar.Image size={50} source={{ uri: "https://i.pravatar.cc/100" }} />
      </UserISecondaryContainer>
    </UserInfos>
  );
};

export default UserHeader;
