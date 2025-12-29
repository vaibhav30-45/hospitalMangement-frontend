import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
    
   const toggleMenu = () => {
    document.querySelector(".nav-links").classList.toggle("active");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Hospital Logo" />
        </NavLink>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><NavLink to="/About">About Us</NavLink></li>
        <li><NavLink to="/Specialities">Healthcare Services</NavLink></li>
        <li><NavLink to="/Doctors">Doctors</NavLink></li>
        <li><NavLink to="/blogs">Articles</NavLink></li>
      </ul>
       {/* Hamburger Menu  */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Right Info */}
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
