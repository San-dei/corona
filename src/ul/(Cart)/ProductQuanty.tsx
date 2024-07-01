"use client";
import useProductStore, { OtherProperties } from "@/store/principal";
import styles from "../../styles/showproductshopping.module.css";

interface Props {
  item: OtherProperties;
}

/**
 *
 * @param {item} item - Admite valores de string y numbers dadas en barril.ts
 * @returns {JSX.Element} botones para aumentar o disminuir mercaderia con zustand
 */
const ProductQuanty: React.FC<Props> = ({ item }): JSX.Element => {
  const onIncrease = useProductStore((state) => state.onIncrease);
  const onDecrease = useProductStore((state) => state.onDecrease);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  return (
    <>
      <>
        <div className={styles.product_conteiner}>
          <button
            onClick={() => onIncrease(item)}
            className={styles.product_quanty}
          >
            +
          </button>

          <div className={styles.product_number}>{item.quanty}</div>

          <button
            onClick={() => onDecrease(item)}
            className={styles.product_quanty}
          >
            -
          </button>
          <button
            onClick={() => deleteProduct(item)}
            className={styles.product_delete}
          >
            Eliminar
          </button>
        </div>
      </>
    </>
  );
};

export default ProductQuanty;
