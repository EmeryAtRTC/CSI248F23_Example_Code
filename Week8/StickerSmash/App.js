import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Button";
//pulling in the image picker
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select an image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImage={PlaceholderImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme={"primary"}
          label={"Choose a photo"}
          onPress={pickImageAsync}
        ></Button>
        <Button label={"Use this photo"}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
