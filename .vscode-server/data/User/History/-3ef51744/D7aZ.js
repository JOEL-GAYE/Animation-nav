import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      name={blogData.name}
      image={blogData.image}
      

    </div>
  );
}

export default App;
