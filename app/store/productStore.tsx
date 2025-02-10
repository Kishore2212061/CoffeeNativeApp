import { create } from "zustand";
import { coffeeData } from "./dummyData";

type ProductStore = {
  coffeeItems: typeof coffeeData;
  fetchCoffees: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  coffeeItems: [],
  fetchCoffees: () => set({ coffeeItems: coffeeData }),
}));
