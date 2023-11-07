import { StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageViewer({ placeholderImage }) {
  return <Image style={styles.image} source={placeholderImage}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
