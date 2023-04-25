import './App.css';
import Header from './Components/Header/Header';
import PokemonList from './Pages/PokemonListPage/PokemonList';
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import PokemonDetail from './Pages/PokemonDetailPage/PokemonDetail';
import Router from './Router/Router';


function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
