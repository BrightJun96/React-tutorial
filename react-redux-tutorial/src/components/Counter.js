import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  console.log("render");
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
