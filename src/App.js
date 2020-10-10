import React from 'react';
import PokemonApi from './fetch';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="pokemon">
      포켓몬 api
      <PokemonApi />
    </div>
  );
}

export default App;
