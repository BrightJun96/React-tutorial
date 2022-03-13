import React, { useReducer } from "react";

const Base = () => {
  function reducer(state, action) {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
    </div>
  );
};

export default Base;
