import React from "react";

const Logo = (props) => {
  console.log(props);
  return (
    <header>
      <h1 className="header">Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt="pokemon"
        // onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
