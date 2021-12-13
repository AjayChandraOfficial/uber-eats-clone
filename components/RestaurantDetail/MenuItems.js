import React from "react";
import { View, Text, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const menuData = [
  {
    name: "Tandoori Chicken",
    price: "20",
    description: "Amazing indian Tandoori with nice spices and added",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
  {
    name: "Samosa",
    price: "1",
    description: "The best thing you will eat today",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
  {
    name: "Pani Puri",
    price: "2",
    description: "India's Favorite street food",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
  {
    name: "Paneer",
    price: "10",
    description: "Delicious spices added in this",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
  {
    name: "Rice",
    price: "10",
    description: "Eat this",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
  {
    name: "Chapati",
    price: "1",
    description: "You might wanna eat it in the night",
    image: `https://picsum.photos/seed/${Math.random()}/800`,
  },
];
export default function MenuItems() {
  return menuData.map((item, i) => {
    return (
      <View
        key={i}
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
        <BouncyCheckbox
          size={25}
          fillColor="green"
          // unfillColor="#FFFFFF"
          // text="Custom Checkbox"
          iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}

          // onPress={(isChecked: boolean) => {}}
        />
        <MenuText
          name={item.name}
          price={item.price}
          description={item.description}
        />
        <MenuImage image={item.image} />
      </View>
    );
  });
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
    <View style={{ width: 200 }}>
      <Text>{description}</Text>
    </View>
    <Text style={{ marginTop: 5 }}>{`$${price}`}</Text>
  </View>
);
const MenuImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{ width: 75, height: 75, borderRadius: 7 }}
  />
);
