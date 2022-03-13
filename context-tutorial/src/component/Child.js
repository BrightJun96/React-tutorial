import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Child = () => {
  const { name, height, weight } = useContext(MyContext);
  return (
    <div>
      <h1>name : {name}</h1>
    </div>
  );
};

export default Child;
