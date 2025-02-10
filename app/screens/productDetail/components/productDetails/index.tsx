import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductDetail = ({ route }: any) => {
  const { id, name, type, rating, description, price, nr } = route.params;
  const [selectedSize, setSelectedSize] = useState("M");
  const [expanded, setExpanded] = useState(false);
  const sentences = description.split(". ");
  const shortDescription =
    sentences.slice(0, 2).join(". ") + (sentences.length > 2 ? "..." : "");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../../../../assets/Cappuccino.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>with {type}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color="#FFA500" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}>({nr})</Text>
            <View style={{ flexDirection: "row", gap: 30, marginLeft: 110 }}>
              <Image
                source={require("../../../../../assets/Coffeebean.png")}
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={require("../../../../../assets//Milk.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            {expanded ? description : shortDescription}
            {sentences.length > 2 && (
              <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <Text style={styles.readMore}>
                  {expanded ? " Show Less" : " Read More"}
                </Text>
              </TouchableOpacity>
            )}
          </Text>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeContainer}>
            {["S", "M", "L"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size ? styles.selectedSize : null,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={
                    selectedSize === size
                      ? styles.selectedSizeText
                      : styles.sizeText
                  }
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductDetail;
