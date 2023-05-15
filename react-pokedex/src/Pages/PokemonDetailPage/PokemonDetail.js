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
  StatsBarContainer,
  StatsBar,
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
  const { activePokemon, getPokemonMoves } = context;

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
                <PointStats>{activePokemon.stats[0].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[0].base_stat}%` }}
                    stats={activePokemon.stats[0].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Attack:</LabelStats>
                <PointStats>{activePokemon.stats[1].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[1].base_stat}%` }}
                    stats={activePokemon.stats[1].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Defense:</LabelStats>
                <PointStats>{activePokemon.stats[2].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[2].base_stat}%` }}
                    stats={activePokemon.stats[2].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Sp. Atk:</LabelStats>
                <PointStats>{activePokemon.stats[3].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[3].base_stat}%` }}
                    stats={activePokemon.stats[3].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Sp. Def:</LabelStats>
                <PointStats>{activePokemon.stats[4].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[4].base_stat}%` }}
                    stats={activePokemon.stats[4].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Speed:</LabelStats>
                <PointStats>{activePokemon.stats[5].base_stat}</PointStats>
                <StatsBarContainer>
                  <StatsBar
                    style={{ width: `${activePokemon.stats[5].base_stat}%` }}
                    stats={activePokemon.stats[5].base_stat}
                  />
                </StatsBarContainer>
              </StatsLine>
              <StatsLine>
                <LabelStats>Total</LabelStats>
                <PointStats>
                  <span>
                    {activePokemon.stats.reduce(
                      (total, item) => total + item.base_stat,
                      0
                    )}
                  </span>
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
              {activePokemon.types.map((type, index) => (
                <p key={index}>{type.type.name}</p>
              ))}
            </BasicInfo>
            <MovesContainer>
              <StatsContainerTitle>Moves:</StatsContainerTitle>
              {getPokemonMoves(activePokemon).map((move, index) => (
                <MoveItem key={index}>{move}</MoveItem>
              ))}
            </MovesContainer>
          </BasicInfoAndMovesContainer>
          <MainImagePokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activePokemon.id}.png`}
          />
        </DetailsContainer>
      </DetailsBackground>
    </>
  );
};

export default PokemonDetail;
