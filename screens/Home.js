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
      imageUrl: "https://wallpaperaccess.com/full/3014596.jpg",
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
        "https://www.wallpaperup.com/uploads/wallpapers/2015/07/24/761420/c0216adae91fa2889b27c73853b9ffee.jpg",
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
        "https://www.adalot.com/thumbs/thumb-guide-restaurant-website-development-1920x1080-people-eating-together.jpg",
      categories: ["Bar", "Cafe"],
      price: "$33",
      reviews: 235,
      rating: 3.8,
      type: "Pickup",
      description: "Thai . Comfort Food",
    },
    {
      name: "Sodexo",
      imageUrl: "https://wallpaperaccess.com/full/3692740.jpg",
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
        "https://assets.architecturaldigest.in/photos/60084adc73920cfd396b3b5d/master/w_1920,h_1080,c_limit/Ishaara-Lower-Parel-Mumbai-restaurant.jpg",
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
        "https://www.questrmg.com/wp-content/uploads/2019/03/web-banner-Top-Three-Restaurant-Trends.jpg",
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
