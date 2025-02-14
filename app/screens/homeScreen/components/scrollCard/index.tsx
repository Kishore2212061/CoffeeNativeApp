import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useHomeStore } from "../../../../store/homeStore";
import { useNavigation } from "@react-navigation/native";
import { useProductStore } from "../../../../store/productStore";
import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  Home: undefined;
  Details: {
    id: string;
    name: string;
    type: string;
    rating: number;
    price: number;
    nr: number;
    description: string;
  };
};
type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;
const CoffeeShopScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { coffees, fetchCoffees } = useHomeStore();
  const { coffeeItems, fetchCoffees: fetchProductCoffees } = useProductStore();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Cappuccino");
  useEffect(() => {
    fetchCoffees();
    fetchProductCoffees();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {["Cappuccino", "Macchiato", "Latte", "Americano"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={coffeeItems.filter((item) =>
          item.name.includes(selectedCategory)
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedId === item.id && styles.selectedCard]}
            onPress={() => {
              setSelectedId(item.id);
              navigation.push("Details", {
                id: String(item.id),
                name: String(item.name),
                type: String(item.type),
                rating: Number(item.rating),
                price: Number(item.price),
                nr: Number(item.number_of_ratings),
                description: String(item.description),
              });
            }}
          >
            <Image
              source={require("../../../../../assets/Cappuccino.png")}
              style={styles.image}
            />
            <View style={styles.rating}>
              <Text style={styles.ratingText}>⭐ {item.rating}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>with {item.type}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>$ {item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CoffeeShopScreen;
