import { create } from "zustand";
import { coffeeData } from "./dummyData";

type Coffee = {
  id: number;
  name: string;
  type: string;
  rating: number;
  price: number;
  nr: number;
  description: string;
};

type HomeStore = {
  coffees: Coffee[];
  searchQuery: string;
  fetchCoffees: () => void;
  setSearchQuery: (query: string) => void;
  filteredCoffees: () => Coffee[];
};

export const useHomeStore = create<HomeStore>((set, get) => ({
  coffees: [],
  searchQuery: "",
  
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

  setSearchQuery: (query) => set({ searchQuery: query }),

  filteredCoffees: () => {
    const { coffees, searchQuery } = get();
    if (!searchQuery) return coffees;
    return coffees.filter((coffee) =>
      coffee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
}));
