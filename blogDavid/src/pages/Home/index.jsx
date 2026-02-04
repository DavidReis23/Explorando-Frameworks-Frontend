import React from "react";
import Bio from "../../components/Bio";
import BlogSection from "../../components/BlogSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Bio />
      <BlogSection />
    </div>
  );
};

export default Home;
