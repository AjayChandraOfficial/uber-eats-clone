import React from "react";
import { View, Text, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
const menuData = [
  {
    key: "m1",
    name: "Tandoori Chicken",
    price: "20",
    description: "Amazing indian Tandoori with nice spices and added",
    image: `https://wallpaperaccess.com/full/715490.jpg`,
  },
  {
    key: "m2",
    name: "Samosa",
    price: "1",
    description: "The best thing you will eat today",
    image: `https://wallpaperaccess.com/full/2069274.jpg`,
  },
  {
    key: "m3",
    name: "Pani Puri",
    price: "2",
    description: "India's Favorite street food",
    image: `https://wallpapercave.com/wp/wp6998780.jpg`,
  },
  {
    key: "m4",
    name: "Paneer",
    price: "10",
    description: "Delicious spices added in this",
    image: `https://thumbs.dreamstime.com/b/indian-vegetarian-main-course-matar-paneer-curry-served-roti-peas-cottage-cheese-curry-tomato-salad-chapati-125773264.jpg`,
  },
  {
    key: "m5",
    name: "Rice",
    price: "10",
    description: "Eat this",
    image: `https://images.wallpaperscraft.com/image/single/rice_food_vegetables_dinner_112170_1920x1080.jpg`,
  },
  {
    key: "m6",
    name: "Chapati",
    price: "1",
    description: "You might wanna eat it in the night",
    image: `https://thumbs.dreamstime.com/b/indian-chapati-stack-roti-flat-bread-83341376.jpg`,
  },
];
export default function MenuItems() {
  const cartCtx = useContext(cartContext);

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
          isChecked={cartCtx.cartItems.find((i) => i.name === item.name)}
          iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}
          onPress={(isChecked) => {
            isChecked
              ? cartCtx.addCartItem(item)
              : cartCtx.removeCartItem(item);
          }}
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
