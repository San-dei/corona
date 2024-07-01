"use client";
import React, { useState } from 'react';
import { Store } from "@/interfaces/barril";
import useProductStore from "@/store/principal";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import styles from "../../styles/viewmore.module.css";
import Alert from '@/components/Alert'; // Importa el componente Alert

interface Props {
  item: Store;
}

/**
 * Genera los botones de compra y favoritos junto con gestor de estado global
 * @param {Store} - Admite strings y numeros
 * @returns {JSX.Element} - Retorna un elemento de JSX
 */
const Viewmore: React.FC<Props> = ({ item }): JSX.Element => {
  const addToProductCart = useProductStore((state) => state.addToCart);
  const addToProductFavortis = useProductStore((state) => state.addToFavorits);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 1500);
  };

  return (
    <>
      {alertVisible && (
        <Alert message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
      <div className={styles.button_core}>
        <button
          onClick={() => {
            addToProductCart(item);
            showAlert("Producto añadido al carro!");
          }}
          className={styles.button_addagregar}
        >
          Agregar <FaCartPlus />
        </button>
        <button
          onClick={() => {
            addToProductFavortis(item);
            showAlert("Producto añadido a favoritos!");
          }}
          className={styles.button_addfavoritos}
        >
          Favorito <IoIosStar />
        </button>
      </div>
    </>
  );
};

export default Viewmore;
