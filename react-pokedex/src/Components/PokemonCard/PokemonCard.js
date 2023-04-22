import React from "react";
import {
  CaptureButton,
  PokemonCardContainer,
  DetailsLink,
  Image,
  Name,
  MainInfo,
  TopInfo,
  BottomInfo,
} from "./pokemonCardStyle";

const PokemonCard = () => {
  return (
    <PokemonCardContainer>
      <TopInfo>
        <MainInfo>
          <p>#01</p>
          <Name>Bulbasaur</Name>
        </MainInfo>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      </TopInfo>
      <BottomInfo>
        <DetailsLink href="/">Detalhes</DetailsLink>
        <CaptureButton>Capturar</CaptureButton>
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
