import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      {/* Blog Header */}
      <Header name={blogData.name} />

      {/* About Section */}
      <About image={blogData.image} about={blogData.about} />

      {/* Article List */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
