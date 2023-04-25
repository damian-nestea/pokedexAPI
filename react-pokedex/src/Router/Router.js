import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import PokemonList from '../Pages/PokemonListPage/PokemonList'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetail from '../Pages/PokemonDetailPage/PokemonDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<PokemonList />}
        />
        <Route 
          path='/pokedex'
          element={<PokedexPage />}
        />
        <Route 
          path='/pokemondetails'
          element={<PokemonDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router