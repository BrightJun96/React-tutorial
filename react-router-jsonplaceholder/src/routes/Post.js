import React from "react";
import { useParams } from "react-router";

const Post = ({ data }) => {
  const postid = useParams().postid - 1;
  const { id, userId, title, body } = data[postid];
  return (
    data && (
      <div style={{ padding: "1rem", width: "650px" }}>
        <h1>post content </h1>
        <h2>userId : {userId}</h2>
        <h2>id : {id}</h2>
        <p>title : {title}</p>
        <p>body : {body}</p>
      </div>
    )
  );
};

export default Post;
