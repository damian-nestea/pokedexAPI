import React, { useContext } from "react";
import {
  CaptureButton,
  RemoveButton,
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
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonCard = ({ pokemon, page }) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const {
    setActivePokemon,
    addPokemonToPokedex,
    removePokemonFromPokedex,
    setPokemonTypeColors,
  } = context;

  let color = setPokemonTypeColors(pokemon.types[0].type.name).color;

  return (
    <PokemonCardContainer style={{ backgroundColor: `${color}9f` }}>
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
            setActivePokemon(pokemon);
            GoToDetailsPage(navigate);
          }}
        >
          Detalhes
        </DetailsLink>
        {page === "pokelist" ? (
          <CaptureButton
            onClick={() => {
              addPokemonToPokedex(pokemon);
            }}
          >
            Capturar!
          </CaptureButton>
        ) : (
          <RemoveButton onClick={() => removePokemonFromPokedex(pokemon)}>
            Excluir
          </RemoveButton>
        )}
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
