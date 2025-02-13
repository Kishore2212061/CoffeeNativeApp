import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useDeliveryStore from "../../../store/useDeliveryStore";
import { styles } from "./style";
const MapScreen = () => {
  const navigation = useNavigation();
  const { address } = useDeliveryStore();

  const userLocation = {
    latitude: parseFloat(address.latitude) || 37.7749,
    longitude: parseFloat(address.longitude) || -122.4194,
  };
  const destination = { latitude: 9.1713, longitude: 77.8671 };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require("../../../../assets/gps.jpg")} style={styles.gpsIcon} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (userLocation.latitude + destination.latitude) / 2,
          longitude: (userLocation.longitude + destination.longitude) / 2,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <Marker coordinate={userLocation} title="Your Location" />
        <Marker coordinate={destination} title="Destination" />
        <Polyline coordinates={[userLocation, destination]} strokeColor="blue" strokeWidth={4} />
      </MapView>
    </View>
  );
};


export default MapScreen;
