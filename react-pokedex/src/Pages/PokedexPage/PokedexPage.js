import React, { useContext } from "react";
import { ListContainer, TituloPokedex } from "./pokedexStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from "../../Components/Modal/Modal";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedexList } = context;
  return (
    <>
      <Header pagina={"pokedex"} />
      <ListContainer>
        <TituloPokedex>Meus Pokémons</TituloPokedex>
        {pokedexList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ListContainer>
      {/* <Modal /> */}
    </>
  );
};

export default PokedexPage;
