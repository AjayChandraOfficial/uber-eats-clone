import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function About({ data, navigation }) {
  return (
    <View>
      <Image
        source={{ uri: data.imageUrl }}
        style={{ width: "100%", height: 240 }}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 40, left: 5 }}
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back" size={32} color="white" />
      </TouchableOpacity>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "gray",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik-Bold",
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{ fontSize: 12, fontFamily: "Rubik-Regular", color: "gray" }}
          >
            {data.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: data.rating >= 4 ? "green" : "#d9d55b",
              paddingHorizontal: 5,
              paddingVertical: 3,
              color: "white",
              fontFamily: "Rubik-Bold",
              borderRadius: 5,
            }}
          >
            {data.rating}
          </Text>
          <Text
            style={{ fontFamily: "Rubik-Regular", marginLeft: 5 }}
          >{`(${data.reviews}+)`}</Text>
        </View>
      </View>
    </View>
  );
}
