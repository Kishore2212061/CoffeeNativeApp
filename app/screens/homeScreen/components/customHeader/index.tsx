import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-ico-miscellaneous";
import { styles } from "./style";
import { useHomeStore } from "../../../../store/homeStore";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

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

const HomeScreen = () => {
  const { fetchCoffees, setSearchQuery, filteredCoffees } = useHomeStore();
  const navigation = useNavigation<NavigationProp>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showFlatList, setShowFlatList] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchCoffees();
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
    setSearchQuery(text);
    setShowFlatList(text.length > 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cityText}>Bilzen, Tanjungbalai</Text>
            <TouchableOpacity>
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
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>

        <TextInput
          placeholder="Search coffee"
          placeholderTextColor="gray"
          style={styles.textStyle}
          onChangeText={handleSearch}
          value={searchText}
        />

        <TouchableOpacity
          style={{ backgroundColor: "#C67C4E", padding: 10, borderRadius: 10 }}
          onPress={() => {
            setShowFlatList(false);
            setSearchText("");
          }}
        >
          {!showFlatList && <Icon name="filter" size={22} color="white" />}

          {showFlatList && <Icon name="cancel" size={22} color="white" />}
        </TouchableOpacity>
      </View>

      {showFlatList && (
        <View
          style={{
            backgroundColor: "white",
            marginTop: 13,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 15,
            paddingBottom: 20,
          }}
        >
          <FlatList
            data={filteredCoffees().slice(0, 4)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.card,
                  selectedId === item.id && styles.selectedCard,
                ]}
                onPress={() => {
                  setSelectedId(item.id);
                  navigation.push("Details", {
                    id: String(item.id),
                    name: String(item.name),
                    type: String(item.type),
                    rating: Number(item.rating),
                    price: Number(item.price),
                    nr: Number(item.nr),
                    description: String(item.description),
                  });
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    padding: 8,
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Cappuccino.png")}
                    style={{ height: 33, width: 33 }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      marginRight: "auto",
                      marginLeft: 10,
                      marginTop: -5,
                    }}
                  >
                    <Text>
                      {item.name} ({item.type})
                    </Text>
                    <Text>${item.price.toFixed(2)}</Text>
                  </View>
                  <Icon
                    name="diagonal-arrow-1"
                    size={22}
                    color="#C67C4E"
                    style={{ marginTop: 4 }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <Image
        source={require("../../../../../assets/Coffee.png")}
        style={styles.imageSize}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
