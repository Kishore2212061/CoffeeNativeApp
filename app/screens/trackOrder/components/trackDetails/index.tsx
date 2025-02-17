import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles } from "./style"
const TrackDetail = () => {
  return (

    <View style={styles.containers}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.timeText}>10 minutes left</Text>
        <Text style={styles.deliveryText}>
          Delivery to <Text style={styles.boldText}>Jl. Kpg Sutoyo</Text>
        </Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressSegment, styles.filled]} />
          <View style={[styles.progressSegment, styles.filled]} />
          <View style={[styles.progressSegment, styles.filled]} />
          <View style={[styles.progressSegment, styles.unfilled]} />
        </View>
        <View style={styles.statusCard}>
          <Image source={require("../../../../assets/bike.jpg")} style={{ height: 80, width: 40 }} />

          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle} numberOfLines={1} ellipsizeMode="tail">
              Delivered your order
            </Text>

            <Text style={styles.statusSubtitle} numberOfLines={3} ellipsizeMode="tail">
              We deliver your goods and products to you in the shortest possible time.
            </Text>
          </View>
        </View>


        <View style={styles.courierContainer}>
          <Image source={require("../../../../assets/profile.jpg")} style={{ height: 50, width: 50 }} />

          <View style={styles.courierTextContainer}>
            <Text style={styles.courierName}>Johan Hawn</Text>
            <Text style={styles.courierRole}>Personal Courier</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Image source={require("../../../../assets/telpon.jpg")} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}

export default TrackDetail

