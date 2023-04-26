import React from "react";
import { ListContainer, TituloPokemonList } from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";

const PokemonList = () => {
  return (
    <>
      <Header pagina={'pokelist'} />
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
