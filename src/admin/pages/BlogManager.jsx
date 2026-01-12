import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./blogAdmin.css";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    const token = localStorage.getItem("adminToken");
    await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchBlogs();
  };

  return (
    <div className="blog-admin">
      <div className="blog-admin-header">
        <h2>Manage Blogs</h2>
        <Link to="/pages/add" className="add-btn">
          ➕ Add Blog
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
              <td className="actions">
                <Link to={`/pages/blogs/edit/${blog._id}`}>✏ Edit</Link>
                <button className="delete-btn" onClick={() => handleDelete(blog._id)}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManager;
