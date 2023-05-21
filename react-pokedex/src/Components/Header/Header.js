import React, { useContext } from "react";
import {
  HeaderContainer,
  PokemonLogo,
  HomeButton,
  PokedexButton,
  RemoveFromPokedex,
  AddToPokedex,
} from "./headerStyle";
import Logo from "../assets/pokemonLogo.png";
import { GoToPokedexPage, GoToPokemonListPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = ({ pagina }) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const {
    isPokemonInPokedex,
    removePokemonFromPokedex,
    addPokemonToPokedex,
    activePokemon,
  } = context;

  const AllPokemonsButton =
    pagina === "pokedex" || pagina === "details" ? (
      <HomeButton
        onClick={() => {
          GoToPokemonListPage(navigate);
        }}
      >
        &lt; Todos Pokemons
      </HomeButton>
    ) : null;

  const GoToPokedexButton =
    pagina === "pokelist" ? (
      <PokedexButton
        onClick={() => {
          GoToPokedexPage(navigate);
        }}
      >
        Pokedex
      </PokedexButton>
    ) : null;

  const RemoveOrAddPokemonToPokedexButton =
    pagina === "details" && isPokemonInPokedex() ? (
      <RemoveFromPokedex
        onClick={() => {
          removePokemonFromPokedex(activePokemon);
        }}
      >
        Excluir da Pokedex
      </RemoveFromPokedex>
    ) : pagina === "details" && !isPokemonInPokedex() ? (
      <AddToPokedex
        onClick={() => {
          addPokemonToPokedex(activePokemon);
        }}
      >
        Capturar Pokemon!
      </AddToPokedex>
    ) : null;

  return (
    <HeaderContainer>
      {AllPokemonsButton}
      <PokemonLogo src={Logo} />
      {GoToPokedexButton}
      {RemoveOrAddPokemonToPokedexButton}
    </HeaderContainer>
  );
};

export default Header;
