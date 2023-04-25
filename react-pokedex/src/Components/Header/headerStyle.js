import styled from "styled-components";

export const HeaderContainer = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: #FFF;
  height:10rem;
  padding: 2rem 4rem;
`

export const PokemonLogo = styled.img`
  width: 15rem;
`

export const HomeButton = styled.button`
  background-color: #fff;
  padding:0;
  font-size:1.1rem;
  font-weight:bold;
  text-decoration:underline;
  border:none;
  cursor: pointer;
`

export const PokedexButton = styled.a`
  background-color: #33A4F5;
  color: #fff;
  padding: 1rem 2.5rem;
  font-size:1.1rem;
  font-weight:bold;
  border:none;
  border-radius:0.25rem;
  cursor: pointer;
`