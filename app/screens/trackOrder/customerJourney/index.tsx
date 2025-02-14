import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Map from "../../trackOrder/customHeader";
const Delivery = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 16,
    borderRadius: 10,
    marginTop: 28,
  },
});

export default Delivery;
