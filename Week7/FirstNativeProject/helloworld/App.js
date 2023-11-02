import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
import { useState } from "react";
//All of useState, useEffect,

export default function App() {
  const [input, setInput] = useState("");
  return (
    // Your main parent component should be wrapped in SafeAreaView. This will appear the same on
    //Android as IOS
    <SafeAreaView style={styles.container}>
      {/* I could type here */}
      {/* <Text>Hello World</Text> */}
      <View style={styles.section1}>
        <Text>Section 1</Text>
        <Text>Section 1</Text>
        <Text>Section 1</Text>
      </View>
      <View style={styles.section2}>
        <Text>Section 2</Text>
        <Text>Section 2</Text>
        <Text>Section 2</Text>
      </View>
      <View style={styles.section3}>
        <Text>Section 3</Text>
        <Text>Section 3</Text>
        <Text>Section 3</Text>
      </View>
      <View style={styles.section4}>
        <TextInput onChangeText={(text) => setInput(text)}></TextInput>
        <Button onPress={() => console.warn(input)} title="Click Me"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "gray",
    //default orientation
    flexDirection: "column",
    //justifyContent alignItems - They both position the items on an axis either left to right
    //or top to bottom
    //justifyConent is for the main axis
    // justifyContent: "center",
    // alignItems: "center",
  },
  section1: {
    flex: 1,
    backgroundColor: "white",
    //column is the default (up and down)
    justifyContent: "center",
    //alignitems does the off axis
    alignItems: "center",
  },
  section2: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "row",
    //since row is the direct justifyContent is on the left-right axis
    justifyContent: "flex-end",
    //alignItems is now for the vertical axis
    alignItems: "flex-end",
  },
  section3: {
    flex: 1,
    backgroundColor: "lightgreen",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
