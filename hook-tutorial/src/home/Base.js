import React from "react";
import useInput from "./components/useInput";
const Base = () => {
  const maxLen = (value) => value.length < 10;

  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default Base;
