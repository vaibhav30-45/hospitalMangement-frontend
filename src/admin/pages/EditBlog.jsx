import { useParams } from "react-router-dom";
import blogsData from "./BlogData.jsx";
import { useState } from "react";
import "./blogAdmin.css";

const EditBlog = () => {
  const { id } = useParams();
  const blogData = blogsData.find(b => b.id === Number(id));
  const [blog, setBlog] = useState(blogData);

  if (!blog) return <h3>Blog not found</h3>;

  return (
    <form className="blog-form">
      <h2>Edit Blog</h2>

      <input value={blog.title} />
      <textarea value={blog.fullDesc[0].content} />

      <button>Update Blog</button>
    </form>
  );
};

export default EditBlog;
