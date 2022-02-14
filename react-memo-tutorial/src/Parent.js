import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [number, setNumber] = useState(0);
  console.log("Parent render");
  return (
    <div>
      <h1>Parent</h1>
      <h2>Parent Number : {number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase
      </button>
      <Child />
      <Child />
      <Child />
    </div>
  );
};

export default Parent;
