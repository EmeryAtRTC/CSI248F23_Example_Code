import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

// https://docs.expo.dev/versions/latest/sdk/camera/
// https://docs.expo.dev/versions/latest/sdk/sharing/
// https://docs.expo.dev/versions/latest/sdk/media-library/

export default function App() {
  let cameraRef = useRef(null);
  //to use the camera we need to ask for permission
  const [cameriaPermission, setCameraPermission] = useState();
  //we also need to ask for permission to save to the camera roll and the gallery
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  // use effect that runs once when the component loads
  // this is where we will get permissions from the user
  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    };
    getPermissions();
  }, []);

  const takePhoto = async () => {
    console.log("Taking photo");
    //options for the photo
    //https://docs.expo.dev/versions/latest/sdk/camera/#camerapictureoptions
    const options = { quality: 1, base64: true, exif: true };
    //take the photo
    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };
  // There are 3 states for the camera permission
  // 1. granted
  // 2. denied
  // 3. undetermined
  if (cameriaPermission === undefined || mediaLibraryPermission === undefined) {
    return <Text>Requesting Permissions...</Text>;
  } else if (cameriaPermission === false || mediaLibraryPermission === false) {
    return <Text>Permission was not granted</Text>;
  }
  if (photo) {
    //lets define some functions if there is a photo
    //Function that shares the photo
    const sharePhoto = async () => {
      //share the photo
      await shareAsync(photo.uri);
    };
    //Function that saves the photo
    const savePhoto = async () => {
      //save the photo to the gallery
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      //reset the photo state
      setPhoto(undefined);
    };
    //render the photo with some buttons
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePhoto} />
        {mediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }
  // if the permission is granted then we can use the camera
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePhoto} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute", // Position the button container absolutely
    bottom: 20, // Distance from the bottom of the screen
    alignSelf: "center", // Center align the container
    backgroundColor: "#fff",
    padding: 10, // Add some padding around the button
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
