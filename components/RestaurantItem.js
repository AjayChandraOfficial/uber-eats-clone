import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <RestaurantImage />
        <RestaurantText />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => {
  return (
    <>
      <Image
        source={{
          uri: "https://i.picsum.photos/id/211/1920/1080.jpg?hmac=8xfV4VJdZ6IFikr0O2VQce9DX8jR1S0vQLnICuFZi-I",
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          top: 15,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantText = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontFamily: "Rubik-Bold" }}>
          Farmhouse Thai Cuisine
        </Text>

        <Text
          style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: "gray" }}
        >
          30-45 · min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "black", fontFamily: "Rubik-Regular" }}>4.5</Text>
      </View>
    </View>
  );
};
