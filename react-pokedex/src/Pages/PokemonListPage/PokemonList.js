import React, { useContext } from "react";
import { ListContainer, TituloPokemonList } from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from "../../Components/Modal/Modal";

const PokemonList = () => {
  const context = useContext(GlobalContext);
  const { pokeList } = context;

  return (
    <>
      <Header pagina={"pokelist"} />
      <ListContainer>
        <TituloPokemonList>Todos Pokémons</TituloPokemonList>
        {pokeList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} page={"pokelist"} />
        ))}
      </ListContainer>
    </>
  );
};

export default PokemonList;
