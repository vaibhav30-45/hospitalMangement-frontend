import { useState } from "react";
import "./blogAdmin.css";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    image: "",
    fullDesc: [{ heading: "", content: "" }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Blog Added (connect backend later)");
  };

  return (
    <div className="admin-main">
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Add Blog</h2>

      <input placeholder="Title" />
      <input placeholder="Category" />
      <input placeholder="Image URL" />
      <textarea placeholder="Blog Content" />

      <button type="submit">Save Blog</button>
    </form>
    </div>
  );
};

export default AddBlog;
