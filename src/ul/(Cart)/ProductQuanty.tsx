"use client";
import useProductStore, { OtherProperties } from "@/store/principal";

interface Props{
  item: OtherProperties
}


const ProductQuanty: React.FC<Props> = ({ item }) => {
  const onIncrease = useProductStore((state) => state.onIncrease);
  const onDecrease = useProductStore((state) => state.onDecrease);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  return (
    <>
      <button onClick={() => onIncrease(item)}>+</button>

      {item.quanty}

      <button onClick={() => onDecrease(item)}>-</button>
      <button onClick={() => deleteProduct(item)}>Eliminar</button>
    </>
  );
};

export default ProductQuanty;
