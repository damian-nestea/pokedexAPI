import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 10rem;
  padding: 2rem 4rem;
`;

export const PokemonLogo = styled.img`
  width: 15rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const HomeButton = styled.button`
  background-color: #fff;
  padding: 0;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;

export const PokedexButton = styled.button`
  background-color: #33a4f5;
  color: #fff;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  position: absolute;
  right: 5%;
  transform: translate(-5%, 0);
  transition: 0.8s;
  :hover {
    background-color: #fff;
    color: #33a4f5;
    border: 1px solid #33a4f5;
  }
`;
export const RemoveFromPokedex = styled.button`
  background-color: #ff6262;
  color: #fff;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    background-color: #fff;
    color: #ff6262;
    border: 1px solid #ff6262;
  }
`;
