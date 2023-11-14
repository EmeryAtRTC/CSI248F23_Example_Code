import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CategoryItem({ name, id, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      {/* I can provide a function to the style prop */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        {/* I can have multiple styles */}
        <View style={[styles.textContainer, { backgroundColor: color }]}>
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
