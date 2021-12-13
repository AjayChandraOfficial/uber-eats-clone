import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTab from "../components/home/HeaderTab";
import SearchBar from "../components/home/SearchBar";
import RestaurantItem from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";
export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([
    {
      name: "Beachside Bar",
      imageUrl:
        "https://i.picsum.photos/id/1056/1920/1080.jpg?hmac=QYMVMuFjmtGsWKQU_ICfJkVQXngKzlZYH0YO7BbgYGY",
      categories: ["Bar", "Cafe"],
      price: "$20",
      reviews: 122,
      rating: 4.2,
      type: "Pickup",
      description: "Thai . Comfort Food",
    },
    {
      name: "Indian Grill",
      imageUrl:
        "https://i.picsum.photos/id/72/1920/1080.jpg?hmac=6BY3KGhrhKlv3VOGlNKrECnIizq_P5l4v20TvanoUbE",
      categories: ["Bar", "Cafe"],
      price: "$14",
      reviews: 234,
      rating: 4.4,
      type: "Delivery",
      description: "Thai . Comfort Food",
    },
    {
      name: "Benihaha",
      imageUrl:
        "https://i.picsum.photos/id/43/1920/1080.jpg?hmac=POIDrb96WzZT5Tag0vJxqI1z5SDR9R56VViVZi63kvE",
      categories: ["Bar", "Cafe"],
      price: "$33",
      reviews: 235,
      rating: 3.8,
      type: "Pickup",
      description: "Thai . Comfort Food",
    },
    {
      name: "Sodexo",
      imageUrl:
        "https://i.picsum.photos/id/675/1920/1080.jpg?hmac=xDh8IOZjVU8mWWJipf-8Xpvq3uPwPzfYMD_n68ID4y0",
      categories: ["Bar", "Cafe"],
      price: "$11",
      reviews: 2643,
      rating: 4,
      type: "Delivery",
      description: "Thai . Comfort Food",
    },
    {
      name: "LakeView Restaurant",
      imageUrl:
        "https://i.picsum.photos/id/650/1920/1080.jpg?hmac=zUaA5CMkMJy14ixFDKPZ3bUIqqymnVDZEtRkFBzvJp8",
      categories: ["Bar", "Cafe"],
      price: "$75",
      reviews: 123,
      rating: 4.2,
      type: "Pickup",
      description: "Thai . Comfort Food",
    },
    {
      name: "Palms",
      imageUrl:
        "https://i.picsum.photos/id/427/1920/1080.jpg?hmac=k-6P3n2rm-88nXWAkaBQXYs9Lc60zo0R6KWtH3TWn3U",
      categories: ["Bar", "Cafe"],
      price: "$10",
      reviews: 6532,
      rating: 4.9,
      type: "Delivery",
      description: "Thai . Comfort Food",
    },
  ]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((item) => item.type === activeTab)
    );
  }, [activeTab]);
  const changeActiveTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: "10%", backgroundColor: "white", padding: 15 }}>
        <HeaderTab changeActiveTab={changeActiveTab} />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantsData={filteredRestaurants}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </View>
  );
}
