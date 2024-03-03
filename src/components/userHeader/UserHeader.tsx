import { Avatar } from "react-native-paper";
import { UserInfos, UserName, UserStatus } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const UserHeader = () => {
  return (
    <UserInfos>
      <UserName>John Doe</UserName>
      <UserStatus>Online</UserStatus>
      <Avatar.Image
        size={50}
        style={{ position: "absolute", right: 10, bottom: 10, top: 20 }}
        source={{ uri: "https://i.pravatar.cc/100" }}
      />
    </UserInfos>
  );
};

export default UserHeader;
