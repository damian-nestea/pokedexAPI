import React from "react";
import {
  HeaderContainer,
  PokemonLogo,
  HomeButton,
  PokedexButton,
  RemoveFromPokedex,
} from "./headerStyle";
import Logo from "../assets/pokemonLogo.png";
import { GoToPokedexPage, GoToPokemonListPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const Header = ({ pagina }) => {
  const navigate = useNavigate();

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

  const RemovePokemonFromPokedexButton =
    pagina === "details" ? (
      <RemoveFromPokedex
        onClick={() => {
          GoToPokemonListPage(navigate);
        }}
      >
        Excluir da Pokedex
      </RemoveFromPokedex>
    ) : null;

  return (
    <HeaderContainer>
      {AllPokemonsButton}
      <PokemonLogo src={Logo} />
      {GoToPokedexButton}
      {RemovePokemonFromPokedexButton}
    </HeaderContainer>
  );
};

export default Header;
