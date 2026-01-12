import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./blogAdmin.css";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        alert("Failed to load blog");
      }
    };
    fetchBlog();
  }, [id]);

   const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleContentChange = (e) => {
    setBlog({
      ...blog,
      fullDesc: [{ heading: "Content", content: e.target.value }]
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog updated successfully");
      navigate("/pages/blogs");
    } catch (error) {
      alert("Update failed");
    }
  };
  
  if (!blog) return <h3>Blog not found</h3>;

  return (
    <form className="blog-form" onSubmit={handleUpdate}>
      <h2>Edit Blog</h2>

      <input name="title" value={blog.title} onChange={handleChange} />
      <textarea value={blog.fullDesc[0].content} onChange={handleContentChange} />

      <button type="submit">Update Blog</button>
    </form>
  );
};

export default EditBlog;
