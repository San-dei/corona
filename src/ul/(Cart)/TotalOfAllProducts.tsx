'use client'
import useProductStore from "@/store/principal"

const TotalOfAllProducts = () => {
    const {cart} = useProductStore()

    const viewTotal = cart.reduce((acc,preValue) => acc + preValue.price * preValue.quanty, 0);
    const fixNumber = viewTotal.toFixed(2);
  return (
    <>
      Total: {fixNumber}
    </>
  )
}

export default TotalOfAllProducts