import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const abilities = [
    "razor-wind",
    "swords-dance",
    "vine-whip",
    "double-edge",
    "body-slam",
  ];
  function logWhenClicked() {
    console.log("Clicked");
  }
  return (
    <div id="div1">
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
