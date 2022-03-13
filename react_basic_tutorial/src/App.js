import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  console.log("render");
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={() => setNumber(0)}>Reset</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
};

export default App;
