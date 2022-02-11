import axios from "axios";
import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Albums from "./routes/Albums";
import Home from "./routes/Home";
import HomeGreeting from "./routes/HomeGreeting";
import Post from "./routes/Post";
import Posts from "./routes/Posts";
import Todos from "./routes/Todos";
import User from "./routes/User";
import Users from "./routes/Users";

const App = () => {
  const [data, setData] = useState(null);

  async function axiosData(url) {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    setData(data);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeGreeting />} />
          <Route
            path="posts"
            element={<Posts data={data} axiosData={axiosData} />}
          >
            <Route path=":postid" element={<Post data={data} />} />
            <Route
              path="/posts"
              element={<h1 style={{ padding: "1rem" }}>Select Item!</h1>}
            />
          </Route>
          <Route
            path="albums"
            element={<Albums data={data} axiosData={axiosData} />}
          />
          <Route
            path="todos"
            element={<Todos data={data} axiosData={axiosData} />}
          />
          <Route
            path="users"
            element={<Users data={data} axiosData={axiosData} />}
          >
            <Route
              path="/users"
              element={<h1 style={{ padding: "1rem" }}>Find User</h1>}
            />
            <Route path=":userid" element={<User data={data} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
