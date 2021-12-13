import React from "react";
import { View, Text, ScrollView } from "react-native";
import cartContext from "../../store/cart-context";
import { useContext } from "react";
export default function OrderDetails() {
  const cartCtx = useContext(cartContext);
  return (
    <>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          paddingHorizontal: 50,
          height: "40%",
          borderBottomWidth: 1,
          borderColor: "black",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartCtx.cartItems.map((item) => (
            <View
              key={item.key}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "lightgray",
                paddingVertical: 15,
              }}
            >
              <Text style={{ fontFamily: "Rubik-Regular", fontSize: 16 }}>
                {item.name}
              </Text>
              <Text style={{ fontFamily: "Rubik-Bold", fontSize: 16 }}>
                {`$${item.price}`}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 40,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 50,
        }}
      >
        <Text style={{ fontFamily: "Rubik-Bold", fontSize: 22 }}>Total</Text>
        <Text style={{ fontFamily: "Rubik-Bold", fontSize: 22 }}>
          {`$${cartCtx.totalAmount}`}
        </Text>
      </View>
    </>
  );
}
