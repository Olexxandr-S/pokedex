import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const pokemons = [
    "Pikachu",
    "Beedrill",
    "Squirtle",
    "Charizard",
    "Blastoise",
    "Venusaur",
    "Nidoking",
  ];
  const randomPokemon = Math.floor(Math.random() * pokemons.length);
  function catchPokemon() {
    setCaught(caught.concat(pokemons[randomPokemon]));
  }

  console.log(props);
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Caught Pokemon</button>
      <ul>
        {caught.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </>
  );
};
export default CaughtPokemon;
