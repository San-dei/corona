import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import styles from "../../../styles/viewmore.module.css";
import Viewmore from "@/ul/(Cart)/ViewMore";
import { satoshi_medium } from "@/config/fonts";

interface Props {
  params: {
    id: string;
  };
}

/**
 * Llama al API y devuelve el producto correspondiente al ID.
 * @param {string} id - El ID del producto.
 * @returns {Promise} - Una promesa que resuelve en un objeto con los detalles del producto.
 */
const getData = async (id: string) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const response = await data.json();
  return response;
};

/**
 * Muestra un producto específico basado en su ID, generando así páginas dinámicas.
 *
 * @param {Props} props - Un objeto de propiedades que contiene un objeto `params` con un `id`.
 * @param {string} props.params.id - El ID del producto a mostrar.
 * @returns {Promise<JSX.Element>} - Una promesa que resuelve en un elemento JSX que muestra los detalles del producto.
 */
const View_more: React.FC<Props> = async ({ params }): Promise<JSX.Element> => {
  const { id } = params;
  const display = await getData(id);

  return (
    <>
      <div className={styles.viewMore}>
        <div className={styles.viewMore_card}>
          <Image
            src={display.image}
            alt="Image description"
            height={180}
            width={200}
          />
          <div className={styles.viewMore_info}>
            <div className={satoshi_medium.className}>
              {display.title}
            </div>
            <div className={styles.viewMore_price}>
            Precio: ${display.price}
            <div className={styles.viewMore_description}>
            Descripcion:<br/>
            {display.description}
            </div>
            </div>
          </div>
          <div className={styles.viewMore_buttons}>
            <Viewmore item={display} />
          </div>
        </div>
      </div>

      <Link href="/" className={styles.viewMore_atras}>
        <IoIosArrowBack className={styles.viewMore_svg_atras}/>
      </Link>
    </>
  );
};

export default View_more;
