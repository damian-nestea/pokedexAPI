import styled from "styled-components";
import { fadeInAllPokemons } from "../../utils/Animation";

export const ListContainer = styled.section`
  background-color: #5e5e5e;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1.8rem;
  padding: 2rem;
`;
export const TituloPokedex = styled.h1`
  font-family: "Poppins";
  font-size: 2rem;
  text-align: left;
  color: #fff;
  width: 100%;
  margin-bottom: 2rem;
  animation: ${fadeInAllPokemons} .6s ease-in-out backwards;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
