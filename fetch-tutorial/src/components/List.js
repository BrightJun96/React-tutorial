import React from "react";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "space-evenly",
      }}
    >
      {data.map((info) => {
        const { id, title, thumbnailUrl } = info;
        return (
          <Item id={id} title={title} thumbnailUrl={thumbnailUrl} key={id} />
        );
      })}
    </div>
  );
};

export default List;
