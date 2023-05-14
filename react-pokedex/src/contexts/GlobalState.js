import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url";

const GlobalState = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [activePokemon, setActivePokemon] = useState({});
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });
      const result = await Promise.all(promises);
      setPokeList(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getPokemonMoves = (pokemon) => {
    let pokemonMoves = [];
    for (let i = 0; i < pokemon.moves.length; i++) {
      i != 6
        ? pokemonMoves.push(pokemon.moves[i].move.name)
        : (i = pokemon.moves.length);
    }
    return pokemonMoves;
  };

  const addPokemonToPokedex = (pokemon) => {
    if (pokemon) {
      setPokedexList([...pokedexList, pokemon]);
    }
    console.log(pokedexList);
  };

  const data = {
    pokeList,
    activePokemon,
    setActivePokemon,
    getPokemonMoves,
    addPokemonToPokedex,
    pokedexList,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
