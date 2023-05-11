import React, { useContext } from "react";
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
  MovesContainer,
  MoveItem,
  MainImagePokemon,
} from "./pokemonDetailStyle";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonDetail = () => {
  const context = useContext(GlobalContext);
  const { activePokemon } = context;
  console.log(activePokemon);
  return (
    <>
      <Header pagina={"details"} />
      <DetailsBackground>
        <TituloDetails>Detalhes</TituloDetails>
        <DetailsContainer>
          <PokemonBackAndFrontContainer>
            <PokemonBackFrontPhoto>
              <PokemonImage src={activePokemon.sprites.front_default} />
            </PokemonBackFrontPhoto>
            <PokemonBackFrontPhoto>
              <PokemonImage src={activePokemon.sprites.back_default} />
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
              <p>
                #0
                {activePokemon.id > 9
                  ? activePokemon.id
                  : `0${activePokemon.id}`}
              </p>
              <NomePokemon>{activePokemon.name}</NomePokemon>
              {activePokemon.types.map(type => (<p>{type.type.name}</p>))}
            </BasicInfo>
            <MovesContainer>
              <StatsContainerTitle>Moves:</StatsContainerTitle>
              <MoveItem>Razor Wind</MoveItem>
              <MoveItem>Sword Dance</MoveItem>
              <MoveItem>Cut</MoveItem>
              <MoveItem>Vine Whip</MoveItem>
            </MovesContainer>
          </BasicInfoAndMovesContainer>
          <MainImagePokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activePokemon.id}.png`} />
        </DetailsContainer>
      </DetailsBackground>
    </>
  );
};

export default PokemonDetail;
