import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
export const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24}/>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Detail</Text>
      <TouchableOpacity>
        <Feather name="heart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
