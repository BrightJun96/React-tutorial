import React, { useEffect, useState } from "react";

const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const json = await res.json();

      setPosts(json.data.children.map((c) => c.data));
    }
    fetchData();
    console.log("render");
  }, [subreddit, setPosts]);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reddit;
