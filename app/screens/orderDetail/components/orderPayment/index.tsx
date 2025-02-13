import React, { useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {styles} from "./style"
type RootStackParamList = {
  Track: undefined;  
};

const OrderSummary = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOrderPress = useCallback(() => {
    navigation.navigate("Track");
  }, [navigation]);
  
  
  const { id, name, type, rating, description, price, nr } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const deliveryFee = 1.0;
  const total = price * quantity + deliveryFee;

  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <Image source={require("../../../../../assets/Cappuccino.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemType}>{type}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrement}>
          <Image source={require("../../../../../assets/minus.jpg")} style={{height:30,width:30,borderRadius:100,borderWidth:1,borderColor:"#AAADB0"}} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increment}>
          <Image source={require("../../../../../assets/plus.jpg")} style={{height:30,width:30,borderWidth:1,borderColor:"#AAADB0",borderRadius:100}} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
      <View style={styles.discountContainer}>
      <Image source={require("../../../../../assets/Discount.jpg")} style={{height:30,width:30}} />
      <Text style={styles.discountText}>1 Discount is applied</Text>
      <Ionicons name="chevron-forward" size={25} style={{marginLeft:75}}/>
      </View>
      </TouchableOpacity>

      <View style={styles.paymentSummary}>
        <Text style={styles.paymentTitle}>Payment Summary</Text>
        <View style={styles.paymentRow}>
          <Text >Price</Text>
          <Text style={{fontWeight:"bold"}}>$ {(price * quantity).toFixed(2)}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text >Delivery Fee</Text>
          <Text style={{fontWeight:"bold"}}>
            <Text style={styles.strikethrough}>$ 2.0</Text>&nbsp; $ {deliveryFee.toFixed(2)}
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: '#EAEAEA',marginTop:20}} />

        <View style={styles.paymentRo}>
          <Text>Total Payment</Text>
          <Text style={{fontWeight:"bold"}}>$ {total.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.paymentMethod}>
      <Image source={require("../../../../../assets/moneys.jpg")} style={{height:30,width:30}} />
        <Text style={styles.paymentMethodText}>Cash</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        <Image source={require("../../../../../assets/dots.jpg")} style={{height:30,width:30,marginLeft:"auto"}} />

      </View>
    
    </View>
  );
};



export default OrderSummary;
