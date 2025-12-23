import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAmbulance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* FORM */}
        <div className="footer-box form-box">
          <h3>Get in Touch</h3>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Mobile Number" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/specialities">Specialities</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/Career">Career</a></li>
          </ul>
        </div>

        {/* SPECIALITIES (YEHI WO SPACE HAI) */}
        <div className="footer-box">
          <h3>Top Specialities</h3>
          <ul>
            <li>❤️Cardiology</li>
            <li>🧠Neurology</li>
            <li>🦴Orthopedics</li>
            <li>👶Pediatrics</li>
            <li>🤰Emergency Care</li>
             <li>🚑Emergency Care</li>
          </ul>
        </div>

        {/* AMBULANCE + CONTACT */}
        <div className="footer-box">
          <div className="ambulance-card">
            <h4>
              <FaAmbulance /> Emergency Ambulance
            </h4>
            <p><FaPhoneAlt /> +91 98774 98773</p>
            <p><FaPhoneAlt /> 0731-2443400</p>
            <p><FaEnvelope /> info@hospitals.com</p>
          </div>

          <div className="contact-details">
            <h3>Contact Details</h3>
            <p><FaPhoneAlt /> +91 98765 43210</p>
            <p><FaPhoneAlt /> +91 89338 3938</p>
            <p><FaEnvelope /> info@example.com</p>
            <p><FaMapMarkerAlt /> Churu, Hindoun India</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Hospital Management System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
