'use client'
import useProductStore from "@/store/principal"
import Image from "next/image"
import ProductQuanty from "./ProductQuanty"

const ShowProductShopping = () => {

  const cart = useProductStore((state) => state.cart)
  return (
    <>
      {cart.map((item)=>(
        <div key={item.id}>
            <Image src={item.image} alt="product of the image" width={80} height={80}/><br/>
            Articulo: {item.title}<br/>
            Precio: {item.price}<br/>
            <ProductQuanty item={item}/>
        </div>
      ))}
    </>
  )
}

export default ShowProductShopping