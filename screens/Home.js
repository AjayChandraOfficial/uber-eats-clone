import React from "react";
import { View, Text } from "react-native";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
export default function Home() {
  return (
    <View style={{ marginTop: "15%", backgroundColor: "white", padding: 15 }}>
      <HeaderTab />
      <SearchBar />
    </View>
  );
}
