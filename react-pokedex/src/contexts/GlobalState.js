import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const GlobalState = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setPokeList(res.data.results);
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
