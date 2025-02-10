import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "white",
  },
  image: {
    width: "90%",
    height: 200,
    marginLeft: 16,
    borderRadius: 20,
  },
  details: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  type: {
    fontSize: 16,
    color: "#888",
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: "#888",
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  description: {
    fontSize: 18,
    color: "#9B9B9B",
    marginVertical: 10,
  },
  readMore: {
    fontSize: 12,
    color: "#C67C4E",
    fontWeight: "bold",
    alignContent: "center",
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    width: 100,
    alignItems: "center",
  },
  selectedSize: {
    backgroundColor: "#FFF5EE",
    borderColor: "#C67C4E",
  },
  sizeText: {
    fontSize: 16,
    color: "black",
  },
  selectedSizeText: {
    color: "#C67C4E",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "#EEE",
    marginTop: -10,
    backgroundColor: "#FFF",
  },
  priceLabel: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A05E32",
  },
  buyButton: {
    backgroundColor: "#C67C4E",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
    width: 230,
    height: 50,
    alignContent: "center",
  },
  buyButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
