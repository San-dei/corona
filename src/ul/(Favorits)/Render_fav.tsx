'use client'
import useProductStore from "@/store/principal";
import Image from "next/image";

export const Render_fav = () => {
  const favorits = useProductStore((state) => state.favorits)
  const addToProductCart = useProductStore((state) => state.addToCart);

  return (
    <>
      {favorits.map((item)=>(
        <div key={item.id}>
            <Image src={item.image} alt="product of the image" width={80} height={80}/><br/>
            Articulo: {item.title}<br/>
            Precio: {item.price}<br/>

            <button onClick={() => addToProductCart(item)}>Agregar al carro</button>
        </div>
      ))}
    </>)
};

export default Render_fav;
