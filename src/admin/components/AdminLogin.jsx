import { useState } from "react";
import "./adminLogin.css";
import { FaUserShield } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
   
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      // ✅ Save JWT token
      localStorage.setItem("adminToken", res.data.token);

      // ✅ Redirect after login
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="icon-box">
          <FaUserShield />
        </div>

        <h2>Admin Login</h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="forgot-text">Forgot password?</p>
      </div>
    </div>
  );
};

export default AdminLogin;
