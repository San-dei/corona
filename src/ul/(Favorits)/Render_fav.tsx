'use client'
import useProductStore from "@/store/principal";
import Image from "next/image"; 
/**
 * Componente que renderiza los productos favoritos.
 * @returns {JSX.Element} - Retorna un elemento de JSX que muestra los productos favoritos.
 */
export const Render_fav = () => {
  const favorits = useProductStore((state) => state.favorits);
  const addToProductCart = useProductStore((state) => state.addToCart);
  const deleteFavorits = useProductStore((state)=> state.deleteFavorits)

  // Retorna los productos favoritos renderizados
  return (
    <>
      {favorits.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt="product of the image" width={80} height={80} /><br/>
          Artículo: {item.title}<br/>
          Precio: {item.price}<br/>
          <button onClick={() => addToProductCart(item)}>Agregar al carro</button>
          <button onClick={() => deleteFavorits(item)}>Eliminar</button>
        </div>
      ))}
    </>
  );
};

export default Render_fav;
