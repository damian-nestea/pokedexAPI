import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url";

const GlobalState = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();

      const promises = data.results.map(async(pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      })
      const result = await Promise.all(promises);
      setPokeList(result);

    } catch (error) {
      console.log(error.response);
    }
  };

  const data = {
    pokeList,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
