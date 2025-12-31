import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/blogs",
});

// PUBLIC
export const getAllBlogs = () => API.get("/");
export const getBlogById = (id) => API.get(`/${id}`);

// ADMIN
export const createBlog = (data, token) =>
  API.post("/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteBlog = (id, token) =>
  API.delete(`/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
