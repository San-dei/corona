import AddToCart from "@/ul/(Cart)/AddToCart";
import Image from "next/image";
import Link from "next/link";

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
      <Link href="/">Volver</Link>
      <p>
        <Image
          src={display.image}
          alt="Image description"
          height={190}
          width={250}
        />
        <br />
        {display.title}
        <br />
        {display.price}
        <br />
        {display.description}
      </p>
      <AddToCart item={display} />
    </>
  );
};

export default View_more;
