import styled from "styled-components";
import { fadeIn, fadeInDetails } from "../../utils/Animation";

export const DetailsBackground = styled.div`
  background-color: #5e5e5e;
  padding: 2rem;
  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`;
export const TituloDetails = styled.h1`
  font-family: "Poppins";
  font-size: 2rem;
  text-align: left;
  color: #fff;
  width: 100%;
  margin-bottom: 2rem;
`;
export const DetailsContainer = styled.section`
  position: relative;
  background-color: #729f92;
  padding: 2rem 3rem;
  border-radius: 2rem;
  display: flex;
  gap: 2rem;
  @media (max-width: 1400px) {
    display: grid;
    grid-template-areas: "photo moves" "stats moves" "stats moves" "stats moves" "stats moves";
  }
  @media (max-width: 1100px) {
    column-gap: 2rem;
    padding-inline: 2rem;
  }
  @media (max-width: 800px) {
    grid-template-areas: "moves" "photo" "stats";
  }
  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`;
export const PokemonBackAndFrontContainer = styled.section`
  width: 18rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  grid-area: photo;
  animation: ${fadeInDetails} .2s ease-in-out backwards;
  @media (max-width: 1400px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
    gap: 2rem;
  }
`;
export const PokemonBackFrontPhoto = styled.div`
  background-color: #fff;
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  @media (max-width: 1400px) {
    height: auto;
  }
`;
export const PokemonImage = styled.img`
  width: 60%;
  @media (max-width: 1400px) {
    width: 8rem;
  }
  @media (max-width: 800px) {
    width: 7rem;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;
export const StatsBoxContainer = styled.section`
  background-color: #fff;
  width: 23rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  grid-area: stats;
  animation: ${fadeInDetails} .2s .2s ease-in-out backwards;

  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;
export const StatsContainerTitle = styled.h2`
  font-family: "Inter";
  align-self: flex-start;
  margin-bottom: 1.8rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StatsLine = styled.div`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  border-bottom: 0.15rem solid #f2f2f2;
`;
export const LabelStats = styled.p`
  width: 20%;
  text-align: right;
  @media (max-width: 900px) {
    font-size: 0.875rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const PointStats = styled.div`
  width: 13%;
  text-align: right;
  span {
    font-weight: bold;
  }
  @media (max-width: 900px) {
    font-size: 0.875rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const StatsBarContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  margin-left: 1rem;
`;
export const StatsBar = styled.div`
  height: 100%;
  max-width: 105%;
  border-radius: 0.5rem;
  background-color: #ffde6a;
  ${({ stats }) => stats < 50 && "background-color:#ff7c2d; "}
`;
export const BasicInfoAndMovesContainer = styled.section`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  grid-area: moves;
  animation: ${fadeInDetails} .2s .4s ease-in-out backwards;

  @media (max-width: 1100px) {
    margin-left: 0;
  }
`;
export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.3rem;
  p {
    font-family: "Inter";
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;
export const NomePokemon = styled.h2`
  font-family: "Inter";
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 1400px) {
    font-size: 1.8rem;
  }
`;
export const MovesContainer = styled.div`
  background-color: #fff;
  width: 18rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 0.5rem;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const MoveItem = styled.p`
  background-color: #ececec;
  font-family: "Montserrat";
  font-size: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: 0.8s;
  ::first-letter {
    text-transform: uppercase;
  }
  :hover {
    background-color: #333;
    color: #fff;
  }
`;
export const MainImagePokemon = styled.img`
  width: 17rem;
  position: absolute;
  top: -7rem;
  right: 2rem;
  animation: ${fadeIn} .2s .6s ease-in-out backwards;
  @media (max-width: 1100px) {
    width: 12rem;
    right: 0;
  }
  @media (max-width: 1100px) {
    width: 8rem;
    right: -1rem;
    top: -4rem;
  }
`;
