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
  position: relative;
  background-color: #729f92;
  padding: 2rem 3rem;
  border-radius: 2rem;
  display: flex;
  gap: 2rem;
`;
export const PokemonBackAndFrontContainer = styled.section`
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
  width: 60%;
`;
export const StatsBoxContainer = styled.section`
  background-color: #fff;
  width: 23rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;
export const StatsContainerTitle = styled.h2`
  align-self: flex-start;
  margin-bottom: 1.8rem;
`;
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StatsLine = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.15rem solid #f2f2f2;
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
`;
export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.3rem;
  p {
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;
export const NomePokemon = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  ::first-letter {
    text-transform: uppercase;
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
`;
export const MoveItem = styled.p`
  background-color: #ececec;
  font-size: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const MainImagePokemon = styled.img`
  width: 17rem;
  position: absolute;
  top: -7rem;
  right: 2rem;
`;
