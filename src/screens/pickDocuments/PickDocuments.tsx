import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../../App";

const Teste = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(CameraType.back);
  const [imageUri, setImageUri] = useState(null);
  const [open, setOpen] = useState(false);
  const cameraRef = useRef<any>(null); // Referência para a câmera

  function toggleCameraType() {
    //muda a camera
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log("mudando a camera");
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
      setOpen(true);
    } else {
      console.log("cameraRef.current é nulo");
    }
  };

  useEffect(() => {
    // assim que abrir pede permissão para usar a camera
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera ref={cameraRef} ratio={"16:9"} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={toggleCameraType}
          >
            <Ionicons name="camera-reverse" size={23} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={takePicture}
          >
            <Ionicons name="camera" size={23} color={"#000"} />
          </TouchableOpacity>
          {imageUri && (
            <Modal animationType="slide" transparent={false} visible={open}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => setOpen(false)}
                  style={{ margin: 10 }}
                >
                  <Ionicons name="close" size={50} color={"#000"} />
                </TouchableOpacity>
                <Image
                  source={{ uri: imageUri }}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  //resizeMode="contain"
                />
              </View>
              <Button
                title="Fechar"
                onPress={() => {
                  setImageUri(null);
                }}
              />
            </Modal>
          )}
        </View>
      </Camera>
    </SafeAreaView>
  );
};

export default Teste;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
