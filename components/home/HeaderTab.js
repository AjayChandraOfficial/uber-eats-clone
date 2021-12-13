import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
export default function HeaderTab(props) {
  const [activeTab, setActiveTab] = useState("Delivery");
  const changeActiveTab = (tab) => {
    setActiveTab(tab);
    props.changeActiveTab(tab);
  };
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderText
        text="Delivery"
        bgColor="black"
        textColor="white"
        changeActiveTab={changeActiveTab}
        activeTab={activeTab}
      />
      <HeaderText
        text="Pickup"
        bgColor="black"
        textColor="white"
        changeActiveTab={changeActiveTab}
        activeTab={activeTab}
      />
    </View>
  );
}

const HeaderText = ({
  text,
  bgColor,
  textColor,
  changeActiveTab,
  activeTab,
}) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: activeTab === text ? bgColor : textColor,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 30,
      }}
      onPress={() => changeActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? textColor : bgColor,
          fontSize: 15,
          fontFamily: "Rubik-Bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
