import { StatusBar } from "expo-status-bar";
import TodoItem from "./Components/TodoItem";
import Filter from "./Components/Filter";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useState } from "react";

const tasks = [
  { id: 1, task: "Finish project report", status: "completed" },
  { id: 2, task: "Prepare presentation slides", status: "pending" },
  { id: 3, task: "Buy groceries", status: "completed" },
  { id: 4, task: "Schedule a meeting", status: "pending" },
  { id: 5, task: "Read a book", status: "pending" },
  { id: 6, task: "Pay bills", status: "completed" },
  { id: 7, task: "Clean the house", status: "pending" },
  { id: 8, task: "Fix the leaking faucet", status: "cancelled" },
  { id: 9, task: "Call a friend", status: "completed" },
  { id: 10, task: "Exercise for 30 minutes", status: "completed" },
];

export default function App() {
  //anything that is displayed on the page that I need to change has to be tracked by state
  const [todoItems, setTodoItems] = useState(tasks);
  //If you want to add components you would also have state that tracks the input
  //We need to track the filter using state
  const [filter, setFilter] = useState("all");
  const filtertedItems = todoItems.filter((item) => {
    if (filter === "all") {
      return true;
    }
    //if filter does not equal all
    return item.status === filter;
  });
  //function that takes in an id an a status and updates the status
  function updateStatus(id, status) {
    //call set to do items
    //you can first find the item and then set the status
    console.log(id + status);
    setTodoItems(
      //go through todoitems, check if the ids match, if they do return the item with the updated status
      //if they do not return the item unchanged
      todoItems.map((item) => (item.id === id ? { ...item, status } : item))
    );
  }
  //lets make a function that takes an id and deletes it from the list
  function deleteItem(id) {
    //simulate delete
    //after this the only items in the list will be ones that do not match the id
    setTodoItems(todoItems.filter((item) => item.id !== id));
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Lets make a little banner to introduce app */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>To Do List App</Text>
      </View>
      {/* Container for user input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a new task"
        ></TextInput>
        <Button title="Add"></Button>
      </View>
      <Filter setFilter={setFilter}></Filter>
      {/* Now I am going to make my ScrollView */}
      <ScrollView style={styles.listContainer}>
        {filtertedItems.map((item) => {
          return (
            <TodoItem
              deleteItem={deleteItem}
              updateStatus={updateStatus}
              key={item.id}
              item={item}
            ></TodoItem>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "gray",
    padding: 15,
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
  },
});
