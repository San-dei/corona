'use client'
import { OtherProperties } from "@/store/principal";
import { useState, useEffect, ChangeEvent } from "react";

//Genera el input para hacer las busquedas.
const NavSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [productSearch, setProductSearch] = useState<OtherProperties[]>([]);

  useEffect(() => {
    const putData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        return setProductSearch(response);
      } catch (error) {
        console.log(error);
      }
    };
    putData();
  }, [search]);

  const showResults = search !== '' ? 
      productSearch.filter(item=> item.title.toLowerCase().includes(search.toLowerCase())) : []


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />

      {
        showResults.map((item,index)=>(
          <div key={index}>
            {item.title}
          </div>
        ))
      }
    </>
  );
};

export default NavSearch;
