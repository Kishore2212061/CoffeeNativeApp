import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./app/navigation/bottomTap"; // Import the main navigator
import StackNavigation from "./app/navigation/stackNavigation";
export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <StackNavigation/>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
