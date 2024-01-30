import React from 'react';

function Pokecard(props) {
  const { name, id, type, base_experience } = props.pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;
