import styled from "styled-components";

export const PokemonCardContainer = styled.article`
  position:relative;
  background-color: lightblue;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width: 20rem;
  height: 10rem;
  padding: 1rem;
  border-radius:1rem;
`
export const Name = styled.h2`
  color: #fff;
`
export const Image = styled.img`
  width: 8rem;
  position:absolute;
  top:-2rem;
  right:1rem;
`
export const DetailsLink = styled.a`
`
export const CaptureButton = styled.a`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`
export const MainInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:0.2rem;
`
export const TopInfo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const BottomInfo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
