import React from "react";
import { View, Text, Image } from "react-native";

export default function MenuItem({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <MenuText
        name={item.name}
        price={item.price}
        description={item.description}
      />
      <MenuImage image={item.image} />
    </View>
  );
}
const MenuText = ({ name, price, description }) => (
  <View>
    <Text
      style={{
        fontSize: 16,
        fontFamily: "Rubik-Bold",
      }}
    >
      {name}
    </Text>

    <Text style={{ marginTop: 5 }}>{`$${price}`}</Text>
  </View>
);
const MenuImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{ width: 75, height: 75, borderRadius: 7 }}
  />
);
