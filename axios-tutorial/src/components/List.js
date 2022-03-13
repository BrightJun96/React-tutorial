import React from "react";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "space-between",
        height: "7000px",
      }}
    >
      {data.map((info) => {
        const { publishedAt } = info;
        return <Item info={info} key={publishedAt} />;
      })}
    </div>
  );
};

export default List;
