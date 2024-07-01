import { create } from "zustand";

// Interfaz para las calificaciones de los productos
export interface Rating {
  rate: number;
  count: number;
}

// Enumeración para las categorías de los productos
export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

// Interfaz para las propiedades adicionales de los productos
export interface OtherProperties {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
  quanty: number;
}

// Interfaz para el estado del almacén de productos
export interface Product {
  cart: OtherProperties[];
  favorits: OtherProperties[];
  addToCart: (id: OtherProperties) => void;
  addToFavorits: (id: OtherProperties) => void;
  deleteFavorits: (id: OtherProperties) => void;
  onIncrease: (id: OtherProperties) => void;
  onDecrease: (id: OtherProperties) => void;
  deleteProduct: (id: OtherProperties) => void;
  totalProduct: () => number;
}

// Hook personalizado para gestionar el estado del almacén de productos
const useProductStore = create<Product>((set, get) => ({
  cart: [],
  favorits: [],

  addToCart: (item: OtherProperties) =>
    set((state) => {
      const comparison = state.cart.findIndex(
        (product) => product.id === item.id
      );

      if (comparison !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[comparison].quanty += 1;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...item, quanty: 1 }] };
      }
    }),

    addToFavorits: (item: OtherProperties) =>
      set((state) => {
        const isFavorit = state.favorits.some(
          (product) => product.id === item.id
        );
  
        if (!isFavorit) {
          return { favorits: [...state.favorits, { ...item, quanty: 1 }] };
        } else {
          return state;
        }
      }),

    deleteFavorits: (item: OtherProperties) =>
      set((state) => {
        return {
          favorits: state.favorits.filter((product) => product.id !== item.id),
        };
      }),

  onIncrease: (quanty: OtherProperties) =>
    set((state) => {
      const comparison = state.cart.find((item) => item.id === quanty.id);

      if (comparison) {
        return {
          cart: state.cart.map((product) =>
            product.id === quanty.id
              ? { ...product, quanty: product.quanty + 1 }
              : product
          ),
        };
      } else {
        return { cart: [...state.cart, { ...quanty, quanty: 1 }] };
      }
    }),

  onDecrease: (quanty: OtherProperties) =>
    set((state) => {
      const comparison = state.cart.find((product) => product.id === quanty.id);

      if (comparison) {
        return {
          cart: state.cart.map((product) =>
            product.id === quanty.id && product.quanty > 1
              ? { ...product, quanty: product.quanty - 1 }
              : product
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...quanty, quanty: 1 }],
        };
      }
    }),

  deleteProduct: (item: OtherProperties) =>
    set((state) => {
      return {
        cart: state.cart.filter((product) => product.id !== item.id),
      };
    }),

  totalProduct: () => {
    const cart = get().cart;
    return cart.reduce((total, item) => total + item.price * item.quanty, 0);
  },
}));

export default useProductStore;
