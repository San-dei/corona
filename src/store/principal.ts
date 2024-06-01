import { create } from 'zustand'

export interface Rating{
  rate:  number;
  count: number;
}

export enum Category{
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface OtherProperties{
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
  quanty:      number;
}

export interface Product{
  cart: OtherProperties[],
  favorits: OtherProperties[],
  addToCart: (id : OtherProperties) => void,
  addToFavorits: (id : OtherProperties) => void,
  onIncrease: (id : OtherProperties) => void,
  onDecrease: (id : OtherProperties) => void,
  deleteProduct: (id : OtherProperties) => void,
  totalProduct: () => number,
}

const useProductStore = create<Product>((set, get)=>({
  cart:[],

  favorits:[],


  addToCart: (item : OtherProperties)=>
    set((state) => {
      const comparation = state.cart.findIndex((product)=> product.id === item.id)

      if(comparation !== -1){
        const updateCart = [...state.cart];
        updateCart[comparation].quanty += 1;
        return {cart: updateCart};
      }

      else{
        return {cart: [...state.cart, {...item, quanty: 1}]}
      }
  }),


  addToFavorits: (item : OtherProperties)=>
    set((state) => {
      const comparation = state.favorits.findIndex((product)=> product.id === item.id)

      if(comparation !== -1){
        const updateCart = [...state.favorits];
        updateCart[comparation].quanty += 1;
        return {favorits: updateCart};
      }

      else{
        return {favorits: [...state.favorits, {...item, quanty: 1}]}
      }
  }),


  onIncrease: (quanty : OtherProperties)=>
    set((state)=>{
      const comparation = state.cart.find(item => item.id === quanty.id);

      if(comparation){
        return{
          cart: state.cart.map(product => 
            product.id === quanty.id ? {...product, quanty: product.quanty + 1} : product
          )
        };
      }

      else{
        return { cart: [...state.cart, {...quanty, quanty: 1}] }
      }
  }),


  onDecrease: (quanty : OtherProperties) => 
    set((state)=>{
    const comparation = state.cart.find( product => product.id === quanty.id);

    if(comparation){
      return{
        cart: state.cart.map( product => 
          product.id === quanty.id ? {...product, quanty: product.quanty - 1} : product
        )
      }
    }

    else{
      return {
        cart: [...state.cart, {...quanty, quanty: 1}]
      }
    }
  }),


  deleteProduct: (item : OtherProperties)=>set((state)=>{
    return{
      cart: state.cart.filter(product => product.id !== item.id)
    }
  }),


  totalProduct: () => {
    const cart = get().cart;
    return cart.reduce((total, item) => total + item.price * item.quanty, 0);
  },

}))

export default useProductStore;