import React, { useState } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
const bottomTabDetails = [
  {
    key: "i1",
    name: "Home",

    icon: (tab) => (
      <Ionicons
        name="home"
        size={24}
        color={tab === "Home" ? "black" : "gray"}
      />
    ),
  },
  {
    key: "i2",
    name: "Search",

    icon: (tab) => (
      <FontAwesome
        name="search"
        size={24}
        color={tab === "Search" ? "black" : "gray"}
      />
    ),
  },
  {
    key: "i3",
    name: "Grocery",

    icon: (tab) => (
      <FontAwesome
        name="shopping-bag"
        size={24}
        color={tab === "Grocery" ? "black" : "gray"}
      />
    ),
  },
  {
    key: "i4",
    name: "Orders",

    icon: (tab) => (
      <FontAwesome
        name="reorder"
        size={24}
        color={tab === "Orders" ? "black" : "gray"}
      />
    ),
  },
  {
    key: "i5",
    name: "Account",

    icon: (tab) => (
      <MaterialCommunityIcons
        name="account"
        size={24}
        color={tab === "Account" ? "black" : "gray"}
      />
    ),
  },
];
export default function BottomTabs() {
  const [activeBottomTab, setActiveBottomTab] = useState("Home");

  return (
    <View
      style={{
        borderColor: "gray",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: 8,
        paddingBottom: 20,
        backgroundColor: "white",
      }}
    >
      {bottomTabDetails.map((item) => (
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
          onPress={() => setActiveBottomTab(item.name)}
        >
          <View style={{ alignItems: "center" }} key={item.id}>
            {item.icon(activeBottomTab)}
            <Text
              style={{
                color: activeBottomTab === item.name ? "black" : "gray",
                fontFamily: "Rubik-SemiBold",
                fontSize: 12,
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
