import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Teste from "../../screens/pickDocuments/PickDocuments";

const MusicRoute = () => <Login />;

const AlbumsRoute = () => <Register />;

const RecentsRoute = () => <Teste />;

const NotificationsRoute = () => <Text>Notifications</Text>;

const DefaultNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default DefaultNavigation;
