import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        top: 28,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Detail</Text>
      <TouchableOpacity>
        <Feather name="heart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
