import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop:25,
    backgroundColor: "#fff",
      },
text:{ fontSize: 18, fontWeight: "bold", position: "absolute", left: "50%", transform: [{ translateX: -20 }] }
})