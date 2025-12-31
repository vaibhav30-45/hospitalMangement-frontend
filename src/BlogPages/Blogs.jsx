import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading blogs...</h3>;
  }

  return (
    <div className="blogs-page">
      <h2 className="blogs-heading">Our Latest Blogs</h2>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            <img src={`http://localhost:5000${blog.image}`} alt={blog.title} />

            <div className="blog-content">
              <p className="blog-meta">
                📅 {blog.date} &nbsp; | &nbsp; 🏥 {blog.category}
              </p>

              <h3>{blog.title}</h3>
              <p>{blog.shortDesc}</p>

              <Link to={`/blogs/${blog._id}`} className="read-more-btn">
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
