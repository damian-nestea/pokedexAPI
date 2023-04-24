import React from "react";
import {
  CaptureButton,
  PokemonCardContainer,
  DetailsLink,
  Image,
  Name,
  IdPokemon,
  Types,
  MainInfo,
  TopInfo,
  BottomInfo,
} from "./pokemonCardStyle";

const PokemonCard = () => {
  return (
    <PokemonCardContainer>
      <TopInfo>
        <MainInfo>
          <IdPokemon>#01</IdPokemon>
          <Name>Bulbasaur</Name>
          <Types>Grass</Types>
        </MainInfo>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      </TopInfo>
      <BottomInfo>
        <DetailsLink href="/">Detalhes</DetailsLink>
        <CaptureButton>Capturar!</CaptureButton>
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
