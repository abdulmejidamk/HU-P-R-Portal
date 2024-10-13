import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterList = ({ onSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get("http://localhost:5056/character");
      setCharacters(response.data);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Select Characters</h2>
      {characters.map((character) => (
        <div
          key={character.id}
          style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}
        >
          <h3>{character.name}</h3>
          <p>Health: {character.health}</p>
          <p>Attack Power: {character.attackPower}</p>
          <p>Ability: {character.ability}</p>
          <button onClick={() => onSelect(character.id)}>
            {character.name} Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
