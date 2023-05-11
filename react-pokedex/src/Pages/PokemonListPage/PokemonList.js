import React, { useContext } from "react";
import { ListContainer, TituloPokemonList } from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonList = () => {
  const context = useContext(GlobalContext);
  const { pokeList } = context;

  return (
    <>
      <Header pagina={"pokelist"} />
      <ListContainer>
        <TituloPokemonList>Todos Pokémons</TituloPokemonList>
        {pokeList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ListContainer>
    </>
  );
};

export default PokemonList;
