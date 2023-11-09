import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CircleButton from "./Components/CircleButton";
import IconButton from "./Components/IconButton";
import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Button";
import EmojiPicker from "./Components/EmojiPicker";
import EmojiList from "./Components/EmojiList";
//pulling in the image picker
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const onReset = () => {
    setShowAppOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  }
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onSaveImageAsync = async () => {
    //implement later
  }
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    //This is the if statement if they seleted an image
    if (!result.canceled) {
     //use the state to get the image
     setSelectedImage(result.assets[0].uri);
     setShowAppOptions(true);
    } else {
      alert("You did not select an image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      {showAppOptions ? 
      (<View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} label="Reset" onPress={onReset}></IconButton>
            <CircleButton onPress={onAddSticker}></CircleButton>
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}></IconButton>
          </View>
      </View>
      ) : 
      (     
         <View style={styles.footerContainer}>
        <Button
          theme={"primary"}
          label={"Choose a photo"}
          onPress={pickImageAsync}
        ></Button>
        <Button label={"Use this photo"} onPress={() => setShowAppOptions(true)}></Button>
      </View>)}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}> 
        <EmojiList onSelect={setPickedEmoji} onCloseModel={onModalClose}></EmojiList>
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
