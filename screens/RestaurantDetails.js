import React from "react";
import { View, Text, ScrollView } from "react-native";
import About from "../components/RestaurantDetail/About";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import ViewCart from "../components/RestaurantDetail/ViewCart";
import { useContext } from "react";
import cartContext from "../store/cart-context";
export default function RestaurantDetails({ route, navigation }) {
  const cartCtx = useContext(cartContext);
  return (
    <View style={{ flex: 1, marginTop: "10%", backgroundColor: "#eee" }}>
      <About data={route.params} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
      {cartCtx.totalAmount ? <ViewCart navigation={navigation} /> : null}
    </View>
  );
}
