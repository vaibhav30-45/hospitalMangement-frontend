import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div className="blog-details">
      <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className="blog-banner" />

      <div className="blog-details-content">
        <p className="blog-meta">
          📅 {blog.date} | 🏥 {blog.category}
        </p>

        <h1>{blog.title}</h1>

        {blog.fullDesc.map((section, index) => (
          <div key={index} className="blog-section">
            {section.heading && <h2>{section.heading}</h2>}
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;