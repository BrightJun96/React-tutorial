import React, { useEffect, useRef, useState } from "react";

const Come = () => {
  const h1 = useRef();

  const [text, setText] = useState("");

  useEffect(() => {
    h1.current.textContent = text;
    console.log("render & Update");
  }, [text]);

  return (
    <div>
      <h1 ref={h1}>h1</h1>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Come;
