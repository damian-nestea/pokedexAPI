import React from "react";
import {
  DetailsBackground,
  TituloDetails,
  DetailsContainer,
  PokemonBackAndFrontContainer,
  PokemonBackFrontPhoto,
  PokemonImage,
} from "./pokemonDetailStyle";
import Header from "../../Components/Header/Header";

const PokemonDetail = () => {
  return (
    <>
      <Header pagina={"details"} />
      <DetailsBackground>
        <TituloDetails>Detalhes</TituloDetails>
        <DetailsContainer>
          <PokemonBackAndFrontContainer>
            <PokemonBackFrontPhoto>
              <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </PokemonBackFrontPhoto>
            <PokemonBackFrontPhoto>
              <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </PokemonBackFrontPhoto>
          </PokemonBackAndFrontContainer>
        </DetailsContainer>
      </DetailsBackground>
    </>
  );
};

export default PokemonDetail;
