import styled from "styled-components";
import { fadeIn } from "../../utils/Animation";

export const PokemonCardContainer = styled.article`
  position: relative;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21rem;
  height: 11rem;
  padding: 1.2rem;
  border-radius: 1rem;
  transition: 0.8s;
  animation: ${fadeIn} .2s ease-in-out backwards;
  :hover {
    border: 1px solid #aaa;
  }
`;
export const Name = styled.h2`
  font-family: "Inter";
  font-size: 1.3rem;
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const IdPokemon = styled.p`
  font-family: "Inter";
  color: #fff;
`;
export const Types = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Image = styled.img`
  width: 8rem;
  position: absolute;
  top: -2rem;
  right: 1rem;
  animation: ${fadeIn} .6s ease-in-out backwards;

  @media (max-width: 500px) {
    width: 6.5rem;
  }
`;
export const DetailsLink = styled.a`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
  text-decoration: underline;
  :link :visited {
    color: #fff;
  }
  cursor: pointer;
`;
export const CaptureButton = styled.a`
  font-family: "Poppins";
  font-size: 0.8rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    opacity: 0.3;
  }
`;
export const RemoveButton = styled.a`
  font-family: "Poppins";
  font-size: 0.8rem;
  background-color: #ff6262;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    opacity: 0.3;
  }
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;
export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
