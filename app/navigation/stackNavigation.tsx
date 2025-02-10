import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen/index";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./bottomTap";
import DetailsScreen from "../screens/productDetail/index";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Front"
          component={BottomTabNavigator}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
