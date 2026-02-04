import React from "react";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "../../components/BlogCard";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Todos os Artigos</h1>
      <p className="page-intro">
        Confira todos os artigos sobre desenvolvimento front-end, carreira e
        tecnologia.
      </p>
      <div className="all-posts">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
