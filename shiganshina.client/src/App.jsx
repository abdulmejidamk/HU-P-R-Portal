import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import Battle from "./components/Battle";

const App = () => {
  const [attackerId, setAttackerId] = useState(null);
  const [defenderId, setDefenderId] = useState(null);
  const [attackerName, setAttackerName] = useState("");
  const [defenderName, setDefenderName] = useState("");

  const handleSelect = (id, name) => {
    if (!attackerId) {
      setAttackerId(id);
      setAttackerName(name);
    } else {
      setDefenderId(id);
      setDefenderName(name);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Shiganshina Battle Arena</h1>
      <CharacterList onSelect={(id, name) => handleSelect(id, name)} />
      {attackerId && defenderId && (
        <Battle
          attackerId={attackerId}
          defenderId={defenderId}
          attackerName={attackerName}
          defenderName={defenderName}
        />
      )}
    </div>
  );
};

export default App;
