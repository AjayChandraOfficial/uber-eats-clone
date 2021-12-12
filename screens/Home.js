import React from "react";
import { View, Text, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import RestaurantItem from "../components/RestaurantItem";
export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: "15%", backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </View>
  );
}
