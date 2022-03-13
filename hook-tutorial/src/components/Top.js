import React, { useEffect, useState } from "react";

const Top = () => {
  useEffect(() => {
    console.log("Top rendered!");
  });
  const [count, setCount] = useState(0);
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Top Level {count}</div>
      <Middle />
    </div>
  );
};

const Middle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Middle rendered!");
  });

  return (
    <>
      <div onClick={() => setCount(count + 1)}>Middle Level {count}</div>
      <Bottom />
    </>
  );
};

const Bottom = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Bottom rendered!");
  });
  return <div onClick={() => setCount(count + 1)}>Bottom Level {count}</div>;
};

export default Top;
