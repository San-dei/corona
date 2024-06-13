"use client";
import { Store } from "@/interfaces/barril";
import useProductStore from "@/store/principal";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import styles from "../../styles/addtocart.module.css";

interface Props {
  item: Store;
}

/**
 * Genera los botones de compra y favoritos junto con gestor de estado global
 * @param {Store} - Admite strings y numeros
 * @returns {JSX.Element} - Retorna un elemento de JSX
 */
const AddToCart: React.FC<Props> = ({ item }): JSX.Element => {
  const addToProductCart = useProductStore((state) => state.addToCart);
  const addToProductFavortis = useProductStore((state) => state.addToFavorits);
  return (
    <>
      <button
        onClick={() => addToProductCart(item)}
        className={styles.button_agregar}
      >
        Agregar <FaCartPlus />
      </button>
      <button
        onClick={() => addToProductFavortis(item)}
        className={styles.button_favoritos}
      >
      Favorito <IoIosStar />
      </button>
    </>
  );
};

export default AddToCart;
