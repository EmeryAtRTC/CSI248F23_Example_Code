import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/sample-data";
import CategoryItem from "../components/CategoryItem";

//because this is a screen. it has access to a navigation prop
export default function CategoriesScreen({ navigation }) {
  function pressHandler() {
    //navgiate takes two parameters
    //first parameter is the screen
    navigation.navigate("Products");
  }
  //lets make a function
  //its going take in the item from renderItem
  //and send it to its destination
  function renderCategoryItem(data) {
    //console.log(data.item);
    const category = data.item;
    //create a new object
    const categoryProps = {
      id: category.id,
      name: category.name,
      color: category.color,
      onPress: () =>
        navigation.navigate("Products", { categoryId: category.id }),
    };
    return <CategoryItem {...categoryProps}></CategoryItem>;
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      //make the list render 2 columns
      numColumns={2}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
