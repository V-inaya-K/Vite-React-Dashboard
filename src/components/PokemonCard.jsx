import React from 'react';

const PokemonCard = ({ name, index }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt={name}
      />
    </div>
  );
};

export default PokemonCard;
