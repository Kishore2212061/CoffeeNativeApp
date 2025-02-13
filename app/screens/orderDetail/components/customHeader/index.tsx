import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

export const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}>      
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={24}/>
      </TouchableOpacity>

      <Text style={styles.text}>
        Order
      </Text>
    </View>
  );
};
