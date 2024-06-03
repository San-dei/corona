"use client";
import useProductStore from "@/store/principal"; // Importa el hook personalizado para el estado del almacén de productos
import Image from "next/image"; // Importa la componente Image de Next.js
import ProductQuanty from "./ProductQuanty"; // Importa el componente ProductQuanty
import TotalOfAllProducts from "./TotalOfAllProducts"; // Importa el componente TotalOfAllProducts
import Buy from "@/components/Buy"; // Importa el componente Buy
import Link from "next/link";

/**
 * Componente que muestra los productos comprados.
 * @returns {JSX.Element} - Retorna un elemento de JSX que muestra los productos comprados.
 */
const ShowProductShopping: React.FC = () => {
  const cart = useProductStore((state) => state.cart);

  // Verifica si el carrito está vacío
  return cart.length <= 0 ? (
    <>
      <div>
        {"El carro está vacío, aún no has comprado nada"}
        <Link href="/">Ir de compras</Link>
      </div>
    </>
  ) : (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            alt="product of the image"
            width={80}
            height={80}
          />
          <br />
          Artículo: {item.title}
          <br />
          Precio: {item.price}
          <br />
          <ProductQuanty item={item} />
          <TotalOfAllProducts />
          <Buy />
        </div>
      ))}
    </>
  );
};

export default ShowProductShopping;
