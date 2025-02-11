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
import { styles } from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.innerContainer}
      >
        <View>
          <Text style={styles.locationText}>Location</Text>
          <View style={{flexDirection:"row"}} >
          <Text style={styles.cityText}>
            Bilzen, Tanjungbalai
          </Text>
          <TouchableOpacity >
          <Ionicons name="chevron-down" size={20} color={"white"} />
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity onPress={() => console.log("Profile Clicked")}>
          <Image
            source={require("../../../../../assets/User.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
      <View
        style={styles.profileContainer}
      >
        <Icon name="search" size={20} color="white" />
        <TextInput
          placeholder="Search coffee"
          placeholderTextColor="gray"
          style={styles.textStyle}
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
