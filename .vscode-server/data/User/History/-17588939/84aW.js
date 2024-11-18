import React from 'react';
import blogData from '../data/blog';

function Article() {
  return (
    <div>
      <header>
        <img src={blogData.image} alt={`${blogData.name} logo`} />
        <h1>{blogData.name}</h1>
        <p>{blogData.about}</p>
      </header>
      <main>
        {blogData.posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <small>
              {post.date ? post.date : "Date not specified"} | {post.minutes} min read
            </small>
            <p>{post.preview}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Article;
