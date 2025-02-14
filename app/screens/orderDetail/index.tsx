import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { CustomHeader } from "./components/customHeader";
import DeliveryToggle from "./components/orderSummary";
import OrderSummary from "./components/orderPayment";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
type RootStackParamList = {
  Track: undefined;
};

const OrderScreen = ({ route }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOrderPress = useCallback(() => {
    navigation.navigate("Track");
  }, [navigation]);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DeliveryToggle />
        <OrderSummary route={route} />
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "#C67C4E",
          height: 55,
          width: "90%",
          padding: 5,
          marginLeft: 20,
          borderRadius: 10,
          marginBottom: 10,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleOrderPress}
      >
        <Text style={{ color: "#fff", fontSize: 24, marginTop: -5 }}>
          Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;
