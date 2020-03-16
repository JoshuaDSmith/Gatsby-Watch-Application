import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [post, setPosts] = useState({});
  const [button, setbutton] = useState(1);
  const [click, setclick] = useState(1);

  const handleClick = () => {
    setclick(button);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${click}`)
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [click]);
  return (
    <div>
      <input
        type="text"
        value={button}
        onChange={e => setbutton(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        {" "}
        Fetch{" "}
      </button>
      <div>{post.title}</div>
      {/* <ul>
        <ul>
          {posts.map(post => (
            <li key={post.id}> {post.title}</li>
          ))}
        </ul>
      </ul> */}
    </div>
  );
}

export default App;
