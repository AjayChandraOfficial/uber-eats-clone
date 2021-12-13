import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const renderModalContent = () => (
    <View style={{ flex: 1, alignItems: "center", marginTop: 300 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 50,
          width: 150,
          alignItems: "center",
        }}
        onPress={() => setModalVisible(false)}
      >
        <Text style={{ color: "white" }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {renderModalContent()}
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
          $23
        </Text>
      </TouchableOpacity>
    </>
  );
}
