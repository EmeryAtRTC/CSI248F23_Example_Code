import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ProductItem({ name, imageUrl }) {
  console.log(imageUrl);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.image} source={{ uri: imageUrl }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
  },
});
