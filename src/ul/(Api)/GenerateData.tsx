import React from "react";
import Image from "next/image";
import { Store } from "@/interfaces/barril";
import Link from "next/link";
import AddToCart from "../(Cart)/AddToCart";
import styles from "../../styles/generatedata.module.css";

interface Props {
  newData: Store[];
}

/**
 * Genera la informacion de los productos en la pagina principal.
 * @param {Store[]} newData - Parametro con todos las props resueltas en la API.
 * @returns {Promise<JSX.Element>}
 */
const GenerateData: React.FC<Props> = async ({
  newData,
}): Promise<JSX.Element> => {
  return (
    <>
    <div className={styles.card_position}>
      {newData.map((item) => (
        <div key={item.id}>
          <div className={styles.card}>
            <Link
              href={`/View_more/${item.id}`}
              className={styles.card_descripcion}
            >
              <Image
                src={item.image}
                alt="Image of product"
                width={130}
                height={150}
              />
              <br />
              {item.title}
            </Link>
            <div className={styles.card_buttons}>
              {/* AGREGA PRODUCTOS AL CARRO */}
              <AddToCart item={item} />
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default GenerateData;
