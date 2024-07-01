"use client";
import useProductStore from "@/store/principal"; // Importa el hook personalizado para el estado del almacén de productos
import Image from "next/image"; // Importa la componente Image de Next.js
import ProductQuanty from "./ProductQuanty"; // Importa el componente ProductQuanty
import TotalOfAllProducts from "./TotalOfAllProducts"; // Importa el componente TotalOfAllProducts
import Buy from "@/components/Buy"; // Importa el componente Buy
import Link from "next/link";
import styles from "../../styles/showproductshopping.module.css";

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
          <div className={styles.product}>
            <Image
              src={item.image}
              alt="product of the image"
              width={80}
              height={80}
            />
            <div className={styles.product_info}>
              <br />
              <div className={styles.product_descripcion}>Artículo: {item.title}</div>
              <br />
              <div className={styles.product_descripcion}>Precio: {item.price}</div>
              <br />
            </div>
            <ProductQuanty item={item} />
          </div>
        </div>
      ))}
    <TotalOfAllProducts />
    </>
  );
};

export default ShowProductShopping;
