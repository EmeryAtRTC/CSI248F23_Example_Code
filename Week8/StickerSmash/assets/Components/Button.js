import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed button")}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
