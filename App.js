import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RestaurantDetails from "./screens/RestaurantDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("./assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
