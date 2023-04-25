import React from 'react'
import { ListContainer , TituloPokedex } from './pokedexStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'

const PokedexPage = () => {
  return (
    <ListContainer>
      <TituloPokedex>Meus Pokémons</TituloPokedex>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </ListContainer>
  )
}

export default PokedexPage