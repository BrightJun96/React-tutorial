import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onScroll = (e) => {
    console.log();

    setPos({ x: window.screenX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    console.log("render");
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return pos;
};

const Dark = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed" }}>
        My Pos : x {x} y {y}
      </h1>
      {y > 500 ? (
        <h2 style={{ color: "red", position: "fixed", top: "100px" }}>
          Warning!
        </h2>
      ) : (
        <h2 style={{ color: "Blue", position: "fixed", top: "100px" }}>
          Safety!
        </h2>
      )}
    </div>
  );
};

export default Dark;
