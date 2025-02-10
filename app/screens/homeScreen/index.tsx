import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import CustomHeader from "./components/customHeader/index";
import CoffeeShopScreen from "./components/scrollCard";
import BottomTabNavigator from "../../navigation/bottomTap";
const Index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader />
      <CoffeeShopScreen />
    </View>
  );
};

export default Index;
