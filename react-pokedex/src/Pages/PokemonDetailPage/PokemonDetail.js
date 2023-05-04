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
  StatsLine,
  LabelStats,
  PointStats,
  BasicInfoAndMovesContainer,
  BasicInfo,
  NomePokemon,
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
              <StatsLine>
                <LabelStats>HP:</LabelStats>
                <PointStats>45</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Attack:</LabelStats>
                <PointStats>49</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Defense:</LabelStats>
                <PointStats>49</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Sp. Atk:</LabelStats>
                <PointStats>65</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Sp. Def:</LabelStats>
                <PointStats>65</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Speed:</LabelStats>
                <PointStats>45</PointStats>
              </StatsLine>
              <StatsLine>
                <LabelStats>Total</LabelStats>
                <PointStats>
                  <span>318</span>
                </PointStats>
              </StatsLine>
            </StatsContainer>
          </StatsBoxContainer>
          <BasicInfoAndMovesContainer>
            <BasicInfo>
              <p>#001</p>
              <NomePokemon>Bulbasaur</NomePokemon>
              <p>Grass</p>
            </BasicInfo>
          </BasicInfoAndMovesContainer>
        </DetailsContainer>
      </DetailsBackground>
    </>
  );
};

export default PokemonDetail;
