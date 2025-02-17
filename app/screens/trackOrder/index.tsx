import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Map from './components/customHeader'
import Delivery from './components/customerJourney';
import TrackDetail from './components/trackDetails';
const DeliveryStatus = () => {
  return (
    <View style={{height:"99%",width:"99%",flex:1}}>
     <Delivery/>
     <TrackDetail/>
    </View>
  );
};

export default DeliveryStatus;