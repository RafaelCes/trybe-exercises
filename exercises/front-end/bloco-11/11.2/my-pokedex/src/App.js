import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return <Pokedex pokeList = {pokemons}/>
}

export default App;
