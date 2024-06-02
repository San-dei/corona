
import { Store } from "@/interfaces/barril";
import GenerateData from "@/ul/(Api)/GenerateData";



/**
 * Ejecuta una llamada a la API.
 * @returns {Promise<Store[]>} Una promesa que devuelve un array de objetos Store.
 */
const getData = async (): Promise<Store[]> => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const response: Store[] = await data.json();
    
    /**
     * Agrega nuevas propiedades a los objetos llamadas desde la API.
     * @param {Store[]} response - Devuelve un array de tipo Store[] obtenido de la API.
     * @return {Store[]} - Devuelve un array sumando nueva propiedad 'quanty'. 
     */
    const properties = response.map((item) => ({
      ...item,
      quanty: 1,
      size:['XS','S','M','L','XL','XXL']
    }));

    return properties;
  } catch (error) {
    console.log(error);
    return [];
  }
};



/**
 * Componente de React que obtiene y muestra datos.
 * @returns {Promise<JSX.Element>} - Retorna una promesa que se resolverá con un elemento de JSX.
 */
const DisplayData: React.FC = async () : Promise<JSX.Element> => {
  const newData = await getData();
  return (
    <>
      <GenerateData newData={newData}/>
    </>
  );
};



export default DisplayData;




/* 
Elementos que contienen: Properties={newData}:

DisplayData
  |_GenerateData
      |_AddToCart
*/