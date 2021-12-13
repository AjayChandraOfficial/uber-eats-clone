import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import cartContext from "../../store/cart-context";
import { useContext } from "react";
import MenuItem from "./MenuItem";
import LottieView from "lottie-react-native";
export default function OrderSuccesfull({ navigation }) {
  const cartCtx = useContext(cartContext);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, alignItems: "center", marginTop: 70 }}>
        <View
          style={{
            height: 100,
            width: 100,

            marginBottom: 30,
          }}
        >
          <LottieView
            source={require("../../assets/animations/check-mark.json")}
            style={{ height: 100, width: 100 }}
            autoPlay
            loop={false}
          />
        </View>
        <Text
          style={{
            fontFamily: "Rubik-Regular",
            fontSize: 22,
            color: "gray",
          }}
        >
          Hurrayy!!
        </Text>
        <Text style={{ fontFamily: "Rubik-Bold", fontSize: 32, marginTop: 10 }}>
          {`Order placed for $${cartCtx.totalAmount}`}
        </Text>
        <Text
          style={{ fontFamily: "Rubik-Regular", fontSize: 30, marginTop: 30 }}
        >
          Your Order
        </Text>
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cartCtx.cartItems.map((item) => (
              <MenuItem item={item} key={item.key} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            height: 200,
            width: "100%",

            marginBottom: 30,
          }}
        >
          <LottieView
            source={require("../../assets/animations/cooking.json")}
            style={{ height: 200, width: "100%" }}
            autoPlay
            loop
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{ position: "absolute", top: 60, right: 20 }}
        onPress={() => {
          cartCtx.emptyCart();
          navigation.navigate("Home");
        }}
      >
        <Entypo name="circle-with-cross" size={28} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
