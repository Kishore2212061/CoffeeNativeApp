import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    itemDetails: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10, 
    },
    image: {
      width: 65,
      height: 65,
      borderRadius: 10,
      marginLeft:8,
      marginTop:12,
    },
    textContainer: {
      marginLeft: 10,
    },
    itemName: {
      fontSize: 20,
      fontWeight: "bold",
      padding:5,
    },
    itemType: {
      padding:5,
      fontSize:16,
      color: "gray",
    },
    quantityContainer: {
      flexDirection: "row",
      marginLeft: "auto",
      alignItems: "center",
      marginRight: 5,
    },
    quantityText: {
      marginHorizontal: 10,
      fontSize: 16,
    },
    discountContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginLeft:5,
      borderWidth: 2,
      borderRadius: 15,
      borderColor:"#EAEAEA",
      marginTop:20,
    },
    discountText: {
      color: "#2F2D2C",
      marginLeft: 18,
      fontWeight:"bold",
      fontSize: 15,
    },
    paymentSummary: {
      padding:10,
      paddingVertical: 10,
      marginTop: 5,
    },
    paymentTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom:6
    },
    paymentRow: {
      paddingTop:5,
      flexDirection: "row",
      justifyContent: "space-between",
  
    },
    paymentRo: {
      paddingTop:21,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    strikethrough: {
      textDecorationLine: "line-through",
      color: "gray",
    },
    paymentMethod: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    paymentMethodText: {
      marginLeft: 20,
      color: "white",
      fontWeight: "bold",
      backgroundColor:"#C67C4E",
      padding:7,
      borderRadius: 12,
      alignContent:"center",
      justifyContent:"center",
    },
    totalAmount: {
     marginLeft:15,
     color:"#9B9B9B",
      fontWeight: "bold",
    },
  });