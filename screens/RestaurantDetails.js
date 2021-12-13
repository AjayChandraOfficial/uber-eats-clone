import React from "react";
import { View, Text, ScrollView } from "react-native";
import About from "../components/RestaurantDetail/About";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import ViewCart from "../components/RestaurantDetail/ViewCart";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About data={route.params} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
      <ViewCart />
    </View>
  );
}
