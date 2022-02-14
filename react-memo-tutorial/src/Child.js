import React from "react";

const Child = ({ number }) => {
  console.log("Child render");
  return (
    <div>
      <h2>Child</h2>
      <h3>Child Number : {number}</h3>
    </div>
  );
};

export default React.memo(Child);
