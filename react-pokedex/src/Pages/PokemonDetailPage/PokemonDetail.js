import React from 'react'
import { DetailsContainer, TituloDetails } from './pokemonDetailStyle'
import Header from '../../Components/Header/Header'

const PokemonDetail = () => {
  return (
    <>
      <Header pagina={'details'}/>
      <DetailsContainer>
        <TituloDetails>Detalhes</TituloDetails>
      </DetailsContainer>
    </>
  )
}

export default PokemonDetail