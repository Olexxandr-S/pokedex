import React from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>My favorite Pokemon is Bulbasaur</p>
      <ul>
        {props.abilities.map(
          (
            ability,
            index //point of this??
          ) => (
            <li key={index}>{ability}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default BestPokemon;
