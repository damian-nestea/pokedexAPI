import React from "react";
import {
  DetailsBackground,
  TituloDetails,
  DetailsContainer,
  PokemonBackAndFrontContainer,
  PokemonBackFrontPhoto,
  PokemonImage,
  StatsBoxContainer,
  StatsContainerTitle,
  StatsContainer,
  LabelStats,
  PointStats,
} from "./pokemonDetailStyle";
import Header from "../../Components/Header/Header";

const PokemonDetail = () => {
  return (
    <>
      <Header pagina={"details"} />
      <DetailsBackground>
        <TituloDetails>Detalhes</TituloDetails>
        <DetailsContainer>
          <PokemonBackAndFrontContainer>
            <PokemonBackFrontPhoto>
              <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </PokemonBackFrontPhoto>
            <PokemonBackFrontPhoto>
              <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </PokemonBackFrontPhoto>
          </PokemonBackAndFrontContainer>
          <StatsBoxContainer>
            <StatsContainerTitle>Base Stats</StatsContainerTitle>
            <StatsContainer>
              <LabelStats>
                <p>HP:</p>
                <p>Attack:</p>
                <p>Defense:</p>
                <p>Sp. Atk:</p>
                <p>Sp. Def:</p>
                <p>Speed:</p>
                <p>Total</p>
              </LabelStats>
              <PointStats>
                <p>45</p>
                <p>49</p>
                <p>49</p>
                <p>65</p>
                <p>65</p>
                <p>45</p>
                <p>318</p>
              </PointStats>
            </StatsContainer>
          </StatsBoxContainer>
        </DetailsContainer>
      </DetailsBackground>
    </>
  );
};

export default PokemonDetail;
