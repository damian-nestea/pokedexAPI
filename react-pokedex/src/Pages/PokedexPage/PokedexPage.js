import React from 'react'
import Header from '../../Components/Header/Header'
import { Titulo } from './pokedexStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'

const PokedexPage = () => {
  return (
    <div>
      <Titulo>Titulo da PokedexPage</Titulo>
      <PokemonCard />
    </div>
  )
}

export default PokedexPage