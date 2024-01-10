import styled from "styled-components";

export const ListContainer = styled.section`
  background-color: #5e5e5e;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.8rem;
  padding: 2rem;
  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`;
export const TituloPokemonList = styled.h1`
  font-family: "Poppins";
  font-size: 2rem;
  text-align: left;
  color: #fff;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
