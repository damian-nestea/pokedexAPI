import React from "react";
import { ListContainer, TituloPokedex } from "./pokedexStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";

const PokedexPage = () => {
  return (
    <>
      <Header pagina={'pokedex'} />
      <ListContainer>
        <TituloPokedex>Meus Pokémons</TituloPokedex>
        
      </ListContainer>
    </>
  );
};

export default PokedexPage;
