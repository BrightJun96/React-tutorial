import React, { useEffect, useState } from "react";

const Demo = ({ a, b }) => {
  useEffect(() => {
    console.log("value of 'a' changed to", a);
  }, [a]);
  return (
    <>
      I've got 2 props a={a} b={b}
    </>
  );
};

const Propchange = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Demo a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>prop a</button>
      <button onClick={() => setCount2(count2 + 1)}>prop b</button>
    </div>
  );
};

export default Propchange;
