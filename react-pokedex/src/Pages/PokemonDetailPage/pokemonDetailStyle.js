import styled from "styled-components";

export const DetailsBackground = styled.div`
  background-color: #5e5e5e;
  padding: 2rem;
`;
export const TituloDetails = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: #fff;
  width: 100%;
  margin-bottom: 2rem;
`;
export const DetailsContainer = styled.section`
  background-color: #729f92;
  padding: 2rem 3rem;
  border-radius: 1rem;
  display: flex;
  gap: 2rem;
`;
export const PokemonBackAndFrontContainer = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const PokemonBackFrontPhoto = styled.div`
  background-color: #fff;
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
export const PokemonImage = styled.img`
  width: 40%;
`;
export const StatsBoxContainer = styled.div`
  background-color: #fff;
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.3rem;
  border-radius: 0.5rem;
`;
export const StatsContainerTitle = styled.h2`
  align-self: flex-start;
`;
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StatsLine = styled.div`
  display: flex;
`;
export const LabelStats = styled.p`
  width: 20%;
  text-align: right;
`;
export const PointStats = styled.div`
  width: 13%;
  text-align: right;
  span {
    font-weight: bold;
  }
`;
