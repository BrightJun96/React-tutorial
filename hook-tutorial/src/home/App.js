import React, { useState } from "react";
import Reddit from "./Reddit";

const App = () => {
  const [value, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
};

export default App;
