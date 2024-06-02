import NavSearch from "@/components/NavSearch"; // Importa el componente NavSearch
import Link from "next/link"; // Importa el componente Link de Next.js

/**
 * Componente que representa la barra de navegación.
 * @returns {JSX.Element} - Retorna un elemento de JSX que representa la barra de navegación.
 */
const Navbar: React.FC = ():JSX.Element => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link href='/'><li>Inicio</li></Link>
            <Link href='/About_us'><li>Sobre nosotros</li></Link>
            <Link href='/My_shopping'><li>Mis Compras</li></Link>
            <Link href='/Favorits'><li>Favoritos</li></Link>
            <NavSearch/>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
