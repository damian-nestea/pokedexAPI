import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url";
import { PokemonTypes } from "../utils/PokemonTypes";

const GlobalState = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [activePokemon, setActivePokemon] = useState({});
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {}, [pokeList, pokedexList]);

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
    deletePokemonFromList(pokemon, pokeList, setPokeList);
    if (pokemon) {
      setPokedexList([...pokedexList, pokemon]);
    }
  };

  const removePokemonFromPokedex = (pokemon) => {
    deletePokemonFromList(pokemon, pokedexList, setPokedexList);
    const auxArray = [...pokeList];
    auxArray.push(pokemon);
    auxArray.sort((a, b) => a.id - b.id);
    setPokeList(auxArray);
  };

  const deletePokemonFromList = (pokemon, pokemonArray, setPokemonArray) => {
    const auxArray = [...pokemonArray];
    auxArray.splice(pokemonArray.indexOf(pokemon), 1);
    setPokemonArray(auxArray);
  };

  const isPokemonInPokedex = () => {
    return pokedexList.includes(activePokemon);
  };

  const setPokemonTypeColors = (pokemonType) => {
    const type = PokemonTypes.find((item) => item.type === pokemonType);
    return type;
  };

  const data = {
    pokeList,
    activePokemon,
    setActivePokemon,
    getPokemonMoves,
    addPokemonToPokedex,
    pokedexList,
    removePokemonFromPokedex,
    isPokemonInPokedex,
    setPokemonTypeColors,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
