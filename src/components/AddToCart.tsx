"use client";
import { Store } from "@/interfaces/barril";
import useProductStore from "@/store/principal";

interface Props{
  item: Store;
}

//AGREGA LOS PRODUCTOS AL CARRO
const AddToCart = ({ item }: Props) => {
  const addToProductCart = useProductStore((state) => state.addToCart);
  return (
    <>
      <button onClick={() => addToProductCart(item)}>Comprar</button>
      <button>A favoritos</button>
    </>
  );
};

export default AddToCart;
