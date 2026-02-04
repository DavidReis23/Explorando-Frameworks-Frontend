import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="card-meta">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime} de leitura</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link to={`/blog/${post.id}`} className="read-more">
        Ler mais →
      </Link>
    </article>
  );
};

export default BlogCard;
