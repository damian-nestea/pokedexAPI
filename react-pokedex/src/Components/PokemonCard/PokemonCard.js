import React, { useEffect, useState } from "react";
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
import axios from "axios";

const PokemonCard = ({ pokemonUrl }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`${pokemonUrl}`);
      console.log(res.data);
      setPokemon(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonCardContainer>
      <TopInfo>
        <MainInfo>
          <IdPokemon>#01</IdPokemon>
          <Name>{pokemon.name}</Name>
          <Types>Grass</Types>
        </MainInfo>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      </TopInfo>
      <BottomInfo>
        <DetailsLink onClick={() => GoToDetailsPage(navigate)}>
          Detalhes
        </DetailsLink>
        <CaptureButton>Capturar!</CaptureButton>
      </BottomInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
