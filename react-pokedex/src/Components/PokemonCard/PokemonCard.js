import React from 'react'
import { CaptureButton, PokemonCardContainer, DetailsLink, Image, Name, MainInfo } from './pokemonCardStyle'

const PokemonCard = () => {
  return (
    <PokemonCardContainer>
      <MainInfo>
        <p>#01</p>
        <Name>Bulbasaur</Name>
      </MainInfo>
      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />
      <DetailsLink href='/'>Detalhes</DetailsLink>
      <CaptureButton>Capturar</CaptureButton>
    </PokemonCardContainer>
  )
}

export default PokemonCard