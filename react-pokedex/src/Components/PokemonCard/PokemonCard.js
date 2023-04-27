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
import { useNavigate } from "react-router-dom";
import { GoToDetailsPage } from "../../Router/coordinator";

const PokemonCard = () => {
  const navigate = useNavigate();
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
        <DetailsLink onClick={()=>GoToDetailsPage(navigate)}>Detalhes</DetailsLink>
        <CaptureButton>Capturar!</CaptureButton>
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
