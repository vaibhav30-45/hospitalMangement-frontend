import { useState } from "react";
import "./adminLogin.css";
import { FaUserShield } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin login data:", { email, password });
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="icon-box">
          <FaUserShield />
        </div>

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="forgot-text">Forgot password?</p>
      </div>
    </div>
  );
};

export default AdminLogin;
