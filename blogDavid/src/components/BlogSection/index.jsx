import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import { blogPosts } from "../../data/blogPosts";
import "./BlogSection.css";

const BlogSection = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="blog-section">
      <h2>Últimas do blog</h2>
      <div className="posts-grid">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Link to="/blog" className="view-all">
        Ver tudo
      </Link>
    </section>
  );
};

export default BlogSection;
