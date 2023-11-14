import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import CircleButton from "./Components/CircleButton";
import IconButton from "./Components/IconButton";
import domtoimage from 'dom-to-image';
import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Button";
import EmojiPicker from "./Components/EmojiPicker";
import EmojiList from "./Components/EmojiList";
import EmojiSticker from "./Components/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {captureRef} from 'react-native-view-shot';
import Animated from 'react-native-reanimated'
//pulling in the image picker
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useState, useRef } from "react";



const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const imageRef = useRef();
  //we have to ask the user for permission to access the camera roll
  const [status, requestPermission] = MediaLibrary.usePermissions();
  //if they have not given permission, ask for it
  if(status === null){
    requestPermission();
  }
  const onReset = () => {
    setShowAppOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  }
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  //function that takes a screenshot
  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
    try {
      //call the capture ref function passing the image which is the view containing the image
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      ///save the image to the camera roll
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  }
  //on WEb we use the dom to image library
  else {
    try {
      //call the toJpeg function passing the image ref
      const dataUrl = await domtoimage.toJpeg(imageRef.current, {
        quality: 0.95,
        width: 320,
        height: 440,
      });
      //create a link and download the image
      let link = document.createElement('a');
      //set the download attribute to the image
      link.download = 'sticker-smash.jpeg';
      link.href = dataUrl;
      //click the link
      link.click();
    } catch (e) {
      console.log(e);
    }
  }
  };
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
    // All components that are going to need gesture handlers need to be wrapped in the GestureHandlerRootView
    //This is just like a regular view but it detects gestures such as taps and swipes
    <GestureHandlerRootView style={styles.container}>
      {/* Ref is used to get a reference to an element. This is not unlike when you would type
      document.getElementById in vanilla javascript */}
      <View ref={imageRef} collapsable={false}> 
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
          {/* Conditinally render the EmojiSticker Component passing the imageSize and the emoji if it has been set */}
          {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji}></EmojiSticker> : null}
        </View>
      </View>
      {/* Show one set of buttons when an image has not been chosen,
      Show another set when it has */}
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
      {/* The emojipick is a modal that will popup when true is passed to this isVisible Prop */}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* The emojilist is a flatlist of images that are loaded from assets/images */}
        {/* When an emoji is chosen the setpickedemoji function will be */}
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
