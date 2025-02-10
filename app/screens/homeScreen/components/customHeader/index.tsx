import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#131313",
        paddingTop: 0,
        marginTop: 28,
        height: 290,
        position: "relative",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 14, color: "white" }}>Location</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Bilzen, Tanjungbalai
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Profile Clicked")}>
          <Image
            source={require("../../../../../assets/User.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#2a2a2a",
          borderRadius: 15,
          padding: 12,
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Icon name="search" size={20} color="white" />
        <TextInput
          placeholder="Search coffee"
          placeholderTextColor="gray"
          style={{ flex: 1, fontSize: 16, color: "white", marginLeft: 10 }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "#C67C4E", padding: 10, borderRadius: 10 }}
        >
          <Icon name="filter" size={22} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../../../assets/Coffee.png")}
        style={{
          width: "90%",
          height: 160,
          borderRadius: 15,
          left: 20,
          top: 30,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
