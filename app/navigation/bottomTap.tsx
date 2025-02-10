import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Index from "../screens/homeScreen";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favorites") {
            iconName = "heart";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Favorites" component={Index} />
      <Tab.Screen name="Cart" component={Index} />
      <Tab.Screen name="Profile" component={Index} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
