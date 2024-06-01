"use client";
import { Store } from "@/interfaces/barril";
import useProductStore from "@/store/principal";

interface Props{
  item: Store;
}

//AGREGA LOS PRODUCTOS AL CARRO
const AddToCart = ({ item }: Props) => {
  const addToProductCart = useProductStore((state) => state.addToCart);
  const addToProductFavortis = useProductStore((state) => state.addToFavorits)
  return (
    <>
      <button onClick={() => addToProductCart(item)}>Agregar al carro</button>
      <button onClick={() => addToProductFavortis(item)}>❤️</button>
    </>
  );
};

export default AddToCart;
