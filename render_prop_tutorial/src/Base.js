import React from "react";
import MouseTracker from "./components2/MouseTracker";
import Record from "./components2/Record";
const Base = () => {
  return (
    <div>
      <MouseTracker
        render={(x, y) => {
          return <Record posx={x} posy={y} />;
        }}
      />
    </div>
  );
};

export default Base;
