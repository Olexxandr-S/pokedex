import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import PokemonMoves from "./PokemonMoves";

const App = () => {
  const abilities = [
    "razor-wind",
    "swords-dance",
    "vine-whip",
    "double-edge",
    "body-slam",
  ];

  return (
    <div>
      <Logo appName="Pokedex" handleClick={""} />
      <BestPokemon abilities={abilities} />
      <PokemonMoves />
    </div>
  );
};

export default App;
