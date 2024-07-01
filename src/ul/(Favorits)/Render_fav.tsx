"use client";
import React, { useState } from 'react';
import useProductStore from "@/store/principal";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/renderfavs.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Alert from '@/components/Alert'; // Importa el componente Alert

/**
 * Componente que renderiza los productos favoritos.
 * @returns {JSX.Element} - Retorna un elemento de JSX que muestra los productos favoritos.
 */
export const Render_fav: React.FC = () => {
  const favorits = useProductStore((state) => state.favorits);
  const addToProductCart = useProductStore((state) => state.addToCart);
  const deleteFavorits = useProductStore((state) => state.deleteFavorits);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  // Retorna los productos favoritos renderizados
  return favorits.length === 0 ? (
    <>
      <div>Aun no haz agregado productos a tu lista de favoritos</div>
      <Link href="/">ver la tienda</Link>
    </>
  ) : (
    <>
      {alertVisible && (
        <Alert message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
      <Link href="/" className={styles.back}><IoIosArrowBack /></Link>
      {favorits.map((item) => (
        <div key={item.id}>
          <div className={styles.renderfav}>
            <div className={styles.renderfav_card}>
              <Image
                src={item.image}
                alt="product of the image"
                width={80}
                height={80}
              />
              <div className={styles.renderfav_info}>
                <br />
                Artículo: {item.title}
                <br />
                Precio: {item.price}
                <br />
                <div className={styles.renderfav_buttons}>
                  <button
                    onClick={() => {
                      addToProductCart(item);
                      showAlert("Producto añadido al carro!");
                    }}
                    className={styles.renderfav_btn}
                  >
                    Agregar al carro
                  </button>
                  <button
                    onClick={() => {
                      deleteFavorits(item);
                      showAlert("Producto eliminado de favoritos!");
                    }}
                    className={styles.renderfav_btn}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Render_fav;
