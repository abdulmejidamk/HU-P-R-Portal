import React, { useState } from "react";
import axios from "axios";

const Battle = ({ attackerId, defenderId, attackerName, defenderName }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBattle = async () => {
    setLoading(true);
    const response = await axios.post("http://localhost:5056/battle", [
      attackerId,
      defenderId,
    ]);
    setResult(response.data);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Battle Result</h2>
      <p>
        {attackerName} vs {defenderName}
      </p>
      <button onClick={handleBattle} disabled={loading}>
        {loading ? "Fighting..." : "Fight!"}
      </button>
      <p>{result}</p>
    </div>
  );
};

export default Battle;
