import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/sample-data";
import { PRODUCTS } from "../data/sample-data";
import ProductItem from "../components/ProductItem";

export default function ProductsScreen({ navigation, route }) {
  //any data that is passed in the second parameter of navigate()
  //goes into route.params
  //console.log(route.params);
  const categoryId = route.params.categoryId;
  const products = PRODUCTS.filter(
    (product) => product.categoryIds.indexOf(categoryId) >= 0
  );
  function renderProductItem(data) {
    const p = data.item;
    /*    id,
    categoryIds,
    name,
    price,
    description,
    imageUrl,
    stock,
    features */
    const productProps = {
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description,
      imageUrl: p.imageUrl,
      features: p.features,
    };
    return <ProductItem {...productProps} />;
  }
  console.log(products);
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(p) => p.id}
        renderItem={renderProductItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
