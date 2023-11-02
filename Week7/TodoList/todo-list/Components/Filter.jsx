import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Filter({ setFilter }) {
  return (
    <View style={styles.filterContainer}>
      <Button title="All" onPress={() => setFilter("all")}></Button>
      <Button title="Pending" onPress={() => setFilter("pending")}></Button>
      <Button title="Completed" onPress={() => setFilter("completed")}></Button>
      <Button title="Cancelled" onPress={() => setFilter("cancelled")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
