import { create } from 'zustand';

interface multiChoice {
  name: string;
  price: string;
}

interface orderState {
  base: { name: string; price: string };
  proteina: { name: string; price: string };
  vegetales: multiChoice[];
  salsa: { name: string; price: string };
  topping: { name: string; price: string };
  extras: multiChoice[];
  setBase: (newBase: string, price: string) => void;
  setProteina: (newProteina: string, price: string) => void;
  setVegetales: (newVegetal: string, price: string) => void;
  setSalsa: (newSalsa: string, price: string) => void;
  setTopping: (newTopping: string, price: string) => void;
  setExtras: (newExtra: string, price: string) => void;
}

export const useOrderStore = create<orderState>()((set) => ({
  base: { name: '', price: '' },
  proteina: { name: '', price: '' },
  vegetales: [{ name: '', price: '' }],
  salsa: { name: '', price: '' },
  topping: { name: '', price: '' },
  extras: [{ name: '', price: '' }],
  setBase: (newBase, price) => set({ base: { name: newBase, price } }),
  setProteina: (newProteina, price) =>
    set({ proteina: { name: newProteina, price } }),
  setVegetales: (newVegetal, price) =>
    set((state) => ({
      vegetales: [...state.vegetales, { name: newVegetal, price }],
    })),
  setSalsa: (newSalsa, price) => set({ salsa: { name: newSalsa, price } }),
  setTopping: (newTopping, price) =>
    set({ topping: { name: newTopping, price } }),
  setExtras: (newExtra, price) =>
    set((state) => ({ extras: [...state.extras, { name: newExtra, price }] })),
}));
