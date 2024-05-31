import NavSearch from "@/components/NavSearch"
import Link from "next/link"

const Navbar : React.FC = () => {
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
  )
}

export default Navbar