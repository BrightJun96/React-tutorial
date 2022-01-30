import React from "react";

const Item = ({ id, title, thumbnailUrl }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "400px",
        height: "300px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img src={thumbnailUrl} alt="defalut" />
      <div>
        <span>id :{id}</span>
        <p>title:{title}</p>
      </div>
    </div>
  );
};

export default Item;
