import React, { useContext } from "react";
import {
  CaptureButton,
  RemoveButton,
  PokemonCardContainer,
  DetailsLink,
  Image,
  Name,
  IdPokemon,
  MainInfo,
  TopInfo,
  BottomInfo,
} from "./pokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { GoToDetailsPage } from "../../Router/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import pokeballBackground from "../assets/smallPokeballBG.png";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import Modal from "../Modal/Modal";

const PokemonCard = ({ pokemon, page }) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const {
    setActivePokemon,
    addPokemonToPokedex,
    removePokemonFromPokedex,
    setPokemonTypeColors,
    setOpenModal,
  } = context;

  let color = setPokemonTypeColors(pokemon.types[0].type.name).color;

  return (
    <PokemonCardContainer
      style={{
        backgroundColor: `${color}99`,
        backgroundImage: `url(${pokeballBackground})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TopInfo>
        <MainInfo>
          <IdPokemon>
            #{pokemon.id <= 9 ? `0${pokemon.id}` : pokemon.id}
          </IdPokemon>
          <Name>{pokemon.name}</Name>
          <PokemonTypes types={pokemon.types} page={"pokemonCard"} />
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
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Detalhes
        </DetailsLink>
        {page === "pokelist" ? (
          <CaptureButton
            onClick={() => {
              addPokemonToPokedex(pokemon);
              setOpenModal(true);
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
