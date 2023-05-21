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
import Modal from "../Modal/Modal";

const Header = ({ pagina }) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const {
    isPokemonInPokedex,
    removePokemonFromPokedex,
    addPokemonToPokedex,
    activePokemon,
    setOpenModal,
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
          setOpenModal(true);
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
      {/* <Modal /> */}
    </HeaderContainer>
  );
};

export default Header;
