import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';


function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="poke-dex">
        {pokemons.map((pokemon) => (
          <Pokemon name={ pokemon.name }
          type={ pokemon.type }
          value={ pokemon.averageWeight.value }
          measurementUnit={ pokemon.averageWeight.measurementUnit }
          image={ pokemon.image }/>
        ))}   
      </div>
    </div>
  );
}

export default App;
