import React from "react";
import Image from "next/image";
import { Store } from "@/interfaces/barril";
import Link from "next/link";
import AddToCart from "../(Cart)/AddToCart";

interface Props {
  newData: Store[];
}

//genera las cartas
const GenerateData: React.FC<Props> = async ({ newData }) => {
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
