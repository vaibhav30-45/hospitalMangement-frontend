import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    secretKey: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Admin created successfully");
        navigate("/admin-login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Admin Signup</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="secretKey" placeholder="Secret Key" onChange={handleChange} required />

        <button>Create Admin</button>
      </form>
    </div>
  );
};

export default AdminSignup;
