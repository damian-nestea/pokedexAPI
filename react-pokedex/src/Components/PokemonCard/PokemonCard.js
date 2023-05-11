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

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <PokemonCardContainer>
      <TopInfo>
        <MainInfo>
          <IdPokemon>
            #{pokemon.id <= 9 ? `0${pokemon.id}` : pokemon.id}
          </IdPokemon>
          <Name>{pokemon.name}</Name>
          <Types>
            {pokemon.types.map((item, index) => (
              <p key={index}>{item.type.name}</p>
            ))}
          </Types>
        </MainInfo>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        />
      </TopInfo>
      <BottomInfo>
        <DetailsLink
          onClick={() => {
            GoToDetailsPage(navigate);
          }}
        >
          Detalhes
        </DetailsLink>
        <CaptureButton>Capturar!</CaptureButton>
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
