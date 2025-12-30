
import React from "react";
import { Link } from "react-router-dom";
import blogsData from "./BlogData";
import "./Blog.css";

const Blogs = () => {
  
  return (
    <div className="blogs-page">
      <h2 className="blogs-heading">Our Latest Blogs</h2>

      <div className="blogs-grid">
        {blogsData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <p className="blog-meta">
                📅 {blog.date} &nbsp; | &nbsp; 🏥 {blog.category}
              </p>
              <h3>{blog.title}</h3>
              <p>{blog.shortDesc}</p>

              <Link to={`/blogs/${blog.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
