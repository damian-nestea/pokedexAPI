import React, { useContext } from "react";
import { ListContainer, TituloPokemonList } from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonList = () => {
  const context = useContext(GlobalContext);
  const { pokeList } = context;

  console.log(pokeList);

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
