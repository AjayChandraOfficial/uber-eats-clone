import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar } from "react-native";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import OrderDetails from "./OrderDetails";
import OrderSuccesfull from "./OrderSuccesfull";
export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const renderModalContent = () => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 400,

        backgroundColor: "white",
      }}
    >
      <OrderDetails />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 50,
          width: 150,
          alignItems: "center",
          position: "absolute",
          bottom: 40,
        }}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate("OrderSuccesfull");
        }}
      >
        <Text style={{ color: "white" }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
  const cartCtx = useContext(cartContext);
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          {renderModalContent()}
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          position: "absolute",
          bottom: 100,
          right: 100,
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 50,
          width: 150,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "white", fontFamily: "Rubik-Regular" }}>
          View Cart
        </Text>
        <Text style={{ color: "white", fontFamily: "Rubik-SemiBold" }}>
          {`$${cartCtx.totalAmount}`}
        </Text>
      </TouchableOpacity>
    </>
  );
}
