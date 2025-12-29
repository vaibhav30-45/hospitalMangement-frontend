
import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./BlogData";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} className="blog-banner" />

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
