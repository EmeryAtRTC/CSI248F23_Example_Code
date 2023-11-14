import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "./data/sample-data";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//createStackNavigator gives you two components
//Navigator Component wraps all screens
//Screen - connects a name to one of our components

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* Wrap the whole app in the NavigationContainer */}
      <NavigationContainer>
        {/* Navigator Wraps the screens */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "orange",
            },
            contentStyle: {
              backgroundColor: "lightblue",
            },
          }}
        >
          {/* When you have one screen it is the home screen */}
          {/* Any components in the navigator have access to a navigator prop */}
          <Stack.Screen
            options={{
              title: "Categories List",
            }}
            name="Categories"
            component={CategoriesScreen}
          />
          <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
