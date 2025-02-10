import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    paddingTop: 0,
    marginTop: 28,
    position: "relative",
  },
  innerContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 39,
  },
  locationText: {
    fontSize: 14,
    color: "white",
  },
  cityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  imageStyle: { width: 40, height: 40 },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 15,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
});
