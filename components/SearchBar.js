import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar() {
  return (
    <View style={{ marginTop: 20, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        textInputProps={{ selectionColor: "#242424" }}
        styles={{
          textInput: {
            borderRadius: 20,
            backgroundColor: "#eee",
            color: "black",
            fontFamily: "Rubik-SemiBold",
            marginTop: 7,
          },

          textInputContainer: {
            flexDirection: "row",
            borderRadius: 100,
            backgroundColor: "#eee",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}
          >
            <AntDesign name="clockcircle" size={12} />
            <Text
              style={{
                marginLeft: 5,
                fontFamily: "Rubik-Regular",
                fontSize: 12,
              }}
            >
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
}
