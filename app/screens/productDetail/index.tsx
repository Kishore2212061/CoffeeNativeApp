import { View, Text } from "react-native";
import React from "react";
import { CustomHeader } from "./components/customHeader";
import ProductDetail from "./components/productDetails";

const DetailsScreen = ({ navigation, route }: any) => {
  if (!route || !route.params) {
    console.warn("Route parameters are undefined");
    return null;
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader />
      <ProductDetail route={route} />
    </View>
  );
};

export default DetailsScreen;
