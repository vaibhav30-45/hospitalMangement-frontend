import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />

      </div>

      {/* Menu */}
      <ul className="nav-links">
         <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Specialities">Specialities</Link></li>
        <li><Link to="/Doctors">Doctors</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/Blog">Articales</Link></li>
      </ul>

      {/* Auth Buttons */}
      {/* <div className="nav-actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div> */}
     <div className="nav-actions emergency-info">
  <span className="emergency-text">
    Emergency: <strong>+91 98774 98773</strong>
  </span>
  <span className="divider">|</span>
  <span className="mail-text">
    Mail: <strong>info@hospital.com</strong>
  </span>
</div>


    </nav>
  );
};

export default Navbar;
