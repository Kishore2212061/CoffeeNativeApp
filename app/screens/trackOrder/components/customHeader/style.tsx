import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 520,
    width: 330,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginBottom: 15,
    marginTop: 10,
  },
  backIcon: {
    marginTop: 10,
  },
  gpsIcon: {
    height: 30,
    width: 30,
    marginRight: 19,
    marginTop: 9,
  },
  map: {
    height: 450,
    width: "100%",
  },
});
