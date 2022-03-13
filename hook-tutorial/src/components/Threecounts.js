import React, { useEffect, useState } from "react";

const Threecounts = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => console.log("count2 effect"), [count2]);
  return (
    <div>
      <div onClick={() => setCount1(count1 + 1)}>count1 :{count1}</div>
      <div onClick={() => setCount2(count2 + 1)}>count2 :{count2}</div>

      <div onClick={() => setCount3(count3 + 1)}>count3 :{count3}</div>
    </div>
  );
};

export default Threecounts;
