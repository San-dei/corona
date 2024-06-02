"use client";
import useProductStore, { OtherProperties } from "@/store/principal";

interface Props{
  item: OtherProperties
}

/**
 * 
 * @param {item} item - Admite valores de string y numbers dadas en barril.ts 
 * @returns {JSX.Element} botones para aumentar o disminuir mercaderia con zustand
 */
const ProductQuanty: React.FC<Props> = ({ item }):JSX.Element => {
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
