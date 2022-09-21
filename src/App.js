import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Footer from "./Footer";

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
    <>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <Footer />
    </>
  );
}

export default App;
