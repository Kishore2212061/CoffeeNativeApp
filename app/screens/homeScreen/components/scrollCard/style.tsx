import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    marginTop: 45,
    marginLeft: 10,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    minHeight: 80,
    paddingVertical: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    marginBottom: 20,
  },
  selectedCategory: {
    backgroundColor: "#C67C4E",
  },
  categoryText: {
    color: "#555",
    fontSize: 16,
  },
  selectedCategoryText: {
    color: "#fff",
  },
  grid: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.03,
    gap: width * 0.04,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  
  },

  card: {
   
    backgroundColor: "white",
    borderRadius: 15,
    padding: width * 0.030,
    gap: 5,
    marginLeft:-17,
    marginRight:20,
  },

  selectedCard: {
    backgroundColor: "#FFE6D0",
  },

  image: {
    width: width * 0.4, 
    height: width * 0.35,
    borderRadius: 10,
  },

  rating: {
    position: "absolute",
    top: width * 0.025,
    left: width * 0.025,
    padding: width * 0.015,
    borderRadius: 5,
  },

  ratingText: {
    color: "#fff",
    fontSize: width * 0.035, 
    fontWeight: "bold",
  },

  name: {
    marginLeft:6.5,
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginTop: width * 0.015,
  },

  description: {
    marginLeft:6.5,
    fontSize: width * 0.035,
    color: "#777",
  },

  price: {
    marginLeft:6.5,

    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#2F4B4E",
  },

  addButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 10,
    width: width * 0.09,
    height: width * 0.09,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width * 0.13,
    marginTop: width * -0.005,
  },

  addButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
  },
});
