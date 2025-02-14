import { create } from "zustand";
import * as Location from "expo-location";

interface Address {
  title: string;
  details: string;
  latitude: string;
  longitude: string;
}

interface DeliveryStore {
  selected: "Deliver"| "Pick Up";
  address: Address;
  modalVisible: boolean;
  toggleSelection: () => void;
  setModalVisible: (visible: boolean) => void;
  setAddress: (newAddress: Partial<Address>) => void;
  getCurrentLocation: () => Promise<void>;
}

const useDeliveryStore = create<DeliveryStore>((set) => ({
  selected: "Deliver",
  address: {
    title: "Sattur",
    details: "3/946H S.R Naidu Nagar",
    latitude: "",
    longitude: "",
  },
  modalVisible: false,

  toggleSelection: () =>
    set((state) => ({
      selected: state.selected === "Deliver" ? "Pick Up" : "Deliver",
    })),

  setModalVisible: (visible: boolean) => set({ modalVisible: visible }),

  setAddress: (newAddress: Partial<Address>) =>
    set((state) => ({ address: { ...state.address, ...newAddress } })),

  getCurrentLocation: async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    set((state) => ({
      address: {
        ...state.address,
        latitude: location.coords.latitude.toFixed(6),
        longitude: location.coords.longitude.toFixed(6),
      },
    }));
  },
}));

export default useDeliveryStore;