import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem({ restaurantsData, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {restaurantsData.map((restaurant) => (
        <TouchableOpacity
          key={Math.random()}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("RestaurantDetails", restaurant);
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              margin: 10,
              borderRadius: 10,
            }}
          >
            <RestaurantImage image={restaurant.imageUrl} />
            <RestaurantText data={restaurant} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        source={{
          uri: image,
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

const RestaurantText = ({ data }) => {
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
          {data.name}
        </Text>

        <Text
          style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: "gray" }}
        >
          30-45 · min
        </Text>
      </View>
      <View
        // "#c6d9c1",#dbe0a4
        style={{
          backgroundColor: data.rating >= 4 ? "#c6d9c1" : "#dbe0a4",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "black", fontFamily: "Rubik-Regular" }}>
          {data.rating}
        </Text>
      </View>
    </View>
  );
};
