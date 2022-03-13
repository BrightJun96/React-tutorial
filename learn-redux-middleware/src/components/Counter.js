import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>INCREASE</button>
      <button onClick={onDecrease}>DECREASE</button>
    </div>
  );
};

export default Counter;
