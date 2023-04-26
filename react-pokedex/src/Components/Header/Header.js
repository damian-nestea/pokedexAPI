import React from "react";
import {
  HeaderContainer,
  PokemonLogo,
  HomeButton,
  PokedexButton,
} from "./headerStyle";
import Logo from "../assets/pokemonLogo.png";
import { GoToPokedexPage, GoToPokemonListPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const Header = ({ pagina }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {pagina === "pokedex" ? (
        <HomeButton
          onClick={() => {
            GoToPokemonListPage(navigate);
          }}
        >
          &lt; Todos Pokemons
        </HomeButton>
      ) : null}

      <PokemonLogo src={Logo} />

      {pagina === "pokelist" ? (
        <PokedexButton
          onClick={() => {
            GoToPokedexPage(navigate);
          }}
        >
          Pokedex
        </PokedexButton>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
