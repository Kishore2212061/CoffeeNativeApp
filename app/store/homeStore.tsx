import { create } from "zustand";
import { coffeeData } from "./dummyData";

type HomeStore = {
  coffees: {
    id: number;
    name: string;
    type: string;
    rating: number;
    price: number;
    nr: number;
    description: string;
  }[];
  fetchCoffees: () => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  coffees: [],
  fetchCoffees: () => {
    const filteredCoffees = coffeeData.map(
      ({ id, name, type, rating, price, number_of_ratings, description }) => ({
        id,
        name,
        type,
        rating,
        price,
        nr: number_of_ratings,
        description,
      })
    );

    set({ coffees: filteredCoffees });
  },
}));
