import styled from "styled-components";

export const PokemonCardContainer = styled.article`
  position: relative;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 10rem;
  padding: 1.2rem;
  border-radius: 1rem;
  transition: 0.8s;
  :hover {
    border: 1px solid #aaa;
  }
`;
export const Name = styled.h2`
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const IdPokemon = styled.p`
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.1rem;
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
`;
export const DetailsLink = styled.a`
  font-size: 0.8rem;
  color: #fff;
  text-decoration: underline;
  :link :visited {
    color: #fff;
  }
  cursor: pointer;
`;
export const CaptureButton = styled.a`
  font-size: 0.9rem;
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
  font-size: 0.9rem;
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
