import { Link } from "react-router-dom";
import blogsData from "./BlogData.jsx";
import "./blogAdmin.css";

const BlogManager = () => {
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
          {blogsData.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.date}</td>
              <td className="actions">
                <Link to={`/pages/blogs/edit/${blog.id}`}>✏ Edit</Link>
                <button className="delete-btn">🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManager;
