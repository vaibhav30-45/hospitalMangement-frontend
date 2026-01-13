import { useState } from "react";
import "./blogAdmin.css";
import axios from "axios";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    image: "",
    fullDesc: [{ heading: "", content: "" }]
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleContentChange = (e) => {
    setBlog({
      ...blog,
      fullDesc: [{ heading: "Content", content: e.target.value }]
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post("http://localhost:5000/api/blogs", blog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog added successfully");
    } catch (error) {
      alert("Error adding blog");
    }
  };

  return (
    <div className="admin-main">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Add Blog</h2>

        <input name="title" placeholder="Title" value={blog.title} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={blog.category} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={blog.image} onChange={handleChange} required />
        <textarea placeholder="Blog Content" value={blog.fullDesc[0].content} onChange={handleContentChange} required />

        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
