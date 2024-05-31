import AddToCart from "@/components/AddToCart";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const response = await data.json();
  return response;
};

const View_more = async ({ params }: Props) => {
  const { id } = params;
  const display = await getData(id);

  return (
    <>
      <Link href="/">Volver</Link>
      <p>
        <Image
          src={display.image}
          alt="Image description"
          height={190}
          width={250}
        />
        <br />
        {display.title}
        <br />
        {display.price}
        <br />
        {display.description}
      </p>
      <AddToCart item={display}/>
    </>
  );
};

export default View_more;
