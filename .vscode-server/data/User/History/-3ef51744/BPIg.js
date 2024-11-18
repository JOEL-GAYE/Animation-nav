import React from "react";
import blogData from "../data/blog";
import logo from "../assets/logo";
import About from "./About";

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      {/* Blog Header */}
      <header>
        <img src={image} alt={`${name} logo`} style={{ width: "100px" }} />
        <h1>{name}</h1>
        <p>{about}</p>
      </header>

      {/* Blog Posts */}
      <main>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <small>
              {post.date ? post.date : "Date not available"} | {post.minutes} min read
            </small>
            <p>{post.preview}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
