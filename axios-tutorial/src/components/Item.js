import React from "react";

const Item = ({ info }) => {
  const { title, urlToImage, url, description } = info;
  return (
    <div
      style={{
        width: "770px",
        height: "300px",
        display: "flex",
        border: "2px solid black",
      }}
    >
      <div className="img-box">
        <img
          src={urlToImage}
          alt="img"
          style={{ width: "200px", height: "200px" }}
        />
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>

      <div className="content-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
