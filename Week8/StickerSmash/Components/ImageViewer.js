import { StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage ? {uri: selectedImage} : placeholderImageSource
  return <Image style={styles.image} source={imageSource}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
