import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//item: { id: 1, task: "Finish project report", status: "completed" }

export default function TodoItem({ item, updateStatus, deleteItem }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.task}>{item.task}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => updateStatus(item.id, "completed")}
          title="Complete"
        ></Button>
        <Button
          onPress={() => updateStatus(item.id, "cancelled")}
          title="Cancel"
        ></Button>
        <Button onPress={() => deleteItem(item.id)} title="Delete"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
