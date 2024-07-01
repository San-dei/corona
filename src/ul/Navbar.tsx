"use client";
import NavSearch from "@/components/NavSearch"; // Importa el componente NavSearch
import Link from "next/link"; // Importa el componente Link de Next.js
import { useState } from "react";
import styles from "../styles/menu.module.css";
import { RiAlignJustify } from "react-icons/ri";
import { satoshi_medium } from "@/config/fonts";
import useProductStore from "@/store/principal";


/**
 * Componente que representa la barra de navegación.
 * @returns {JSX.Element} - Retorna un elemento de JSX que representa la barra de navegación.
 */
const Navbar: React.FC = (): JSX.Element => {
  const {cart} = useProductStore()
  const {favorits} = useProductStore()
  
  let count = cart.reduce((acc,preValue)=> acc + preValue.quanty, 0);
  let comprobation = cart.length !== 0 ? ('('+count+')' ) : '';

  let favorito = favorits.length;
  let otherComprobation = favorits.length !== 0 ? favorito : ''
  
  

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className={styles.Cabezera}>
        <h1 className={styles.Cabezera_h1}>
          <Link href="/" className={styles.Cabezera_a}>
            E-comerce
          </Link>
        </h1>

        <button className={styles.Cabezera_btn} onClick={toggleMenu}>
          <RiAlignJustify className={styles.Cabezera_svg} />
        </button>

        <nav
          className={
            menu
              ? `${styles.Cabezera_nav} ${styles.isActive}`
              : styles.Cabezera_nav
          }
        >
          <div className={satoshi_medium.className}>
            <ul className={styles.Cabezera_ul}>
              <li className={styles.Cabezera_li}>
                <Link href="/" className={styles.Cabezera_a}>
                  Inicio
                </Link>
              </li>
              <li className={styles.Cabezera_li}>
                <Link href="/About_us" className={styles.Cabezera_a}>
                  Sobre nosotros
                </Link>
              </li>
              <li className={styles.Cabezera_li}>
                {comprobation} <Link href="/My_shopping" className={styles.Cabezera_a}>
                  Mis Compras
                </Link>
              </li>
              <li className={styles.Cabezera_li}>
                <Link href="/Favorits" className={styles.Cabezera_a}>
                {otherComprobation} Favoritos
                </Link>
              </li>
              <li className={styles.Cabezera_li}>
                <Link href="/Create_user" className={styles.Cabezera_a}>
                  Registrarse
                </Link>
              </li>
              <li className={styles.Cabezera_li}>
                <Link href="/Login" className={styles.Cabezera_a}>
                  Iniciar Sesion
                </Link>
              </li>
              <div className={styles.Cabezera_buscador}>
                <NavSearch />
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
