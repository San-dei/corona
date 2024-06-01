import Buy from "@/components/Buy"
import ShowProductShopping from "@/ul/(Cart)/ShowProductShopping"
import TotalOfAllProducts from "@/ul/(Cart)/TotalOfAllProducts"

const page = () => {
  return (
    <>
      <ShowProductShopping/>
      <TotalOfAllProducts/>
      <Buy/>
    </>
  )
}

export default page