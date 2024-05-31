
import { Store } from "@/interfaces/barril";
import GenerateData from "@/ul/(Api)/GenerateData";


//obtener datos
const getData = async (): Promise<Store[]> => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const response: Store[] = await data.json();

    const properties = response.map((item) => ({
      ...item,
      quanty: 1,
    }));

    return properties;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//renderizacion de cards
const DisplayData: React.FC = async () => {
  const newData = await getData();
  return (
    <>
      <GenerateData newData={newData}/>
    </>
  );
};

export default DisplayData;




/* 
Properties newData:

DisplayData
  |_GenerateData
      |_AddToCart
*/