import React, { useEffect } from "react";
import { useState } from "react";
import { ListContainer, TituloPokemonList } from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import axios from "axios";
import {BASE_URL} from "../../constants/url";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getAllPokemons();
  },[])

  const getAllPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Header pagina={"pokelist"} />
      <ListContainer>
        <TituloPokemonList>Todos Pokémons</TituloPokemonList>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </ListContainer>
    </>
  );
};

export default PokemonList;
