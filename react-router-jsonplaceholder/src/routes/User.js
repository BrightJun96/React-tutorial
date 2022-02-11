import React from "react";
import { useParams } from "react-router";

const User = ({ data }) => {
  console.log(data);

  const userid = useParams().userid - 1;
  const { name, username, phone, email, website } = data[userid];
  return (
    data && (
      <div style={{ padding: "1rem" }}>
        <h1>name : {name}</h1>
        <h2>username : {username}</h2>
        <p>phone : {phone}</p>
        <p>email : {email}</p>
        <p>website : {website}</p>
      </div>
    )
  );
};

export default User;
