import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Modal, TextInput, Image } from "react-native";
import useDeliveryStore from "../../../../store/useDeliveryStore";
import { StyleSheet } from "react-native";
import {styles} from "./style"
const DeliveryToggle = () => {
  const { 
    selected, 
    toggleSelection, 
    modalVisible, 
    setModalVisible, 
    address, 
    setAddress, 
    getCurrentLocation 
  } = useDeliveryStore();

  const animatedValue = new Animated.Value(selected === "Deliver" ? 0 : 1);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleToggle = () => {
    const newValue = selected === "Deliver" ? 1 : 0;
    Animated.timing(animatedValue, {
      toValue: newValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    toggleSelection();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 150],
  });

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
          <View style={styles.background}>
            <Animated.View style={[styles.activeBackground, { transform: [{ translateX }] }]} />
          </View>
          <View style={styles.buttonContent}>
            <View style={{ marginLeft: 30 }}>
              <Text style={[styles.toggleText, selected === "Deliver" && styles.activeText]}>Deliver</Text>
            </View>
            <View style={{ width: 100 }}>
              <Text style={[styles.toggleText, selected === "Pick Up" && styles.activeText]}>Pick Up</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.title}>Delivery Address</Text>
        <Text style={styles.addressTitle}>{address.title}</Text>
        <Text style={styles.addressDetails}>{address.details}</Text>
        <Text style={styles.coordinates}>
          Lat: {address.latitude || "Fetching..."} | Lng: {address.longitude || "Fetching..."}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
          <Image source={require("../../../../../assets/edit.jpg")} style={{ height: 20, width: 20 }} />
          <Text style={styles.buttonText}> Edit Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require("../../../../../assets/note.jpg")} style={{ height: 20, width: 20 }} />
          <Text style={styles.buttonText}> Add Note</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Address</Text>

          
          <TextInput
            style={styles.input}
            value={address.details}
            onChangeText={(text) => setAddress({ details: text })}
            placeholder="Enter Address Details"
          />

          <TouchableOpacity style={styles.saveButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonTexts}>Save Address</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default DeliveryToggle;
