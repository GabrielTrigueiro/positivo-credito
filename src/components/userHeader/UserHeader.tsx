import { Avatar } from "react-native-paper";
import { UserInfos, UserName, UserStatus } from "./styles";

const UserHeader = () => {
  return (
    <UserInfos>
      <UserName>John Doe</UserName>
      <UserStatus>ativo</UserStatus>
      <Avatar.Image
        size={50}
        style={{ position: "absolute", right: 20, top: 5 }}
        source={{ uri: "https://i.pravatar.cc/100" }}
      />
    </UserInfos>
  );
};

export default UserHeader;
