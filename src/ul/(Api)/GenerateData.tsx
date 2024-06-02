import React from "react";
import Image from "next/image";
import { Store } from "@/interfaces/barril";
import Link from "next/link";
import AddToCart from "../(Cart)/AddToCart";

interface Props {
  newData: Store[];
}

/**
 * Genera la informacion de los productos en la pagina principal.
 * @param {Store[]} newData - Parametro con todos las props resueltas en la API.
 * @returns {Promise<JSX.Element>}
 */
const GenerateData: React.FC<Props> = async ({ newData }) : Promise<JSX.Element> => {
  return (
    <>
      {newData.map((item) => (
        <div key={item.id}>
          <div>
            <Link href={`/View_more/${item.id}`}>
              <Image
                src={item.image}
                alt="Image of product"
                width={190}
                height={200}
              />
              <br />
              {item.title}
              <br />
              {item.price}
            </Link>
            <div>
              {/* AGREGA PRODUCTOS AL CARRO */}
              <AddToCart item={item} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GenerateData;
