import React from "react";
import { Link } from "react-router-dom";

const Category = ({ categorys }) => {
  return (
    <div>
      <ul
        style={{
          width: "600px",
          display: "flex",
          listStyle: "none",
          justifyContent: "space-evenly",
        }}
      >
        {categorys.map((category) => {
          return <Link to={category}>{category}</Link>;
        })}
      </ul>
    </div>
  );
};

export default Category;
