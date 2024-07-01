import useProductStore from "@/store/principal";
import styles from "../../styles/showproductshopping.module.css";
import Buy from "@/components/Buy";

/**
 * Componente que muestra el total de todos los productos en el carrito.
 * @returns {JSX.Element} - Retorna un elemento de JSX que muestra el total de todos los productos.
 */
const TotalOfAllProducts: React.FC = (): JSX.Element => {
  const { cart } = useProductStore();

  const viewTotal = cart.reduce(
    (acc, preValue) => acc + preValue.price * preValue.quanty,
    0
  );

  const fixNumber = viewTotal.toFixed(2);

  return (
    <>
      <div className={styles.total}>
        <div className={styles.total_result}>Total: {fixNumber} <Buy/></div>
      </div>
    </>
  );
};

export default TotalOfAllProducts;
