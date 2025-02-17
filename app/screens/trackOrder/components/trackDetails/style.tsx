import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containers: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
  },
  timeText: {
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  deliveryText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
  },
  boldText: {
    color: "black",
    fontWeight: "bold",
  },
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  progressSegment: {
    width: 78,
    height: 6,
    marginHorizontal: 2,
    borderRadius: 2,
  },
  filled: {
    backgroundColor: "green",
  },
  unfilled: {
    backgroundColor: "#ddd",
  },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10,

    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: "#808080",
  },
  statusTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statusSubtitle: {
    padding: 2,
    fontSize: 16,
    color: "gray",
  },
  courierContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    padding: 2,
    marginBottom: 10,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  courierTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  courierName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  courierRole: {
    fontSize: 14,
    color: "gray",
  },

  callButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#AAADB0",
  },
});
