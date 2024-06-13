"use client";
import { OtherProperties } from "@/store/principal";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";
import styles from "../styles/navsearch.module.css"

/**
 * Componente de barra de búsqueda para la navegación.
 * @returns {JSX.Element} Elemento de JSX que representa la barra de búsqueda.
 */
const NavSearch: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [productSearch, setProductSearch] = useState<OtherProperties[]>([]);

  useEffect(() => {
    /**
     * Función asincrónica para obtener datos de productos desde la API.
     * @returns {void}
     */
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProductSearch(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [search]);

  // Filtra los resultados de búsqueda basados en el valor de búsqueda actual
  const showResults =
    search !== ""
      ? productSearch.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  /**
   * Maneja el cambio en el valor de búsqueda.
   * @param {ChangeEvent<HTMLInputElement>} event - Evento de cambio en el campo de búsqueda.
   * @returns {void}
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
        className={styles.navsearch_input}
      />

      {showResults.map((item, index) => (
        <div key={index}>
          <Link href={`/View_more/${item.id}`}>
            <Image
              src={item.image}
              alt="Imagen de búsqueda"
              height={20}
              width={20}
            />
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavSearch;
