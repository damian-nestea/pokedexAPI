import './App.css';
import Header from './Components/Header/Header';
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import PokemonDetail from './Pages/PokemonDetailPage/PokemonDetail';
import PokemonList from './Pages/PokemonListPage/PokemonList';

function App() {
  return (
    <div className="App">
      <Header pagina={"Pagina Principal"} />
      <PokemonList />
      <PokedexPage />
      <PokemonDetail />
    </div>
  );
}

export default App;
