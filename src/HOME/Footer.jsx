import React, { useState } from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAmbulance,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  // ✅ INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message Sent Successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* FORM */}
        <div className="footer-box form-box">
          <h3>Get in Touch</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/*  QUICK LINKS  */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/specialities">Specialities</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
          </ul>
        </div>

        {/*  SPECIALITIES  */}
        <div className="footer-box">
          <h3>Top Specialities</h3>
          <ul>
            <li>❤️ Cardiology</li>
            <li>🧠 Neurology</li>
            <li>🦴 Orthopedics</li>
            <li>👶 Pediatrics</li>
            <li>🤰 Maternity Care</li>
            <li>🚑 Emergency Care</li>
          </ul>
        </div>

        {/*  AMBULANCE + CONTACT */}
        <div className="footer-box">
          <div className="ambulance-card">
            <h4>
              <FaAmbulance /> Emergency Ambulance
            </h4>
            <p>
              <FaPhoneAlt /> +91 98774 98773
            </p>
            <p>
              <FaPhoneAlt /> 0731-2443400
            </p>
            <p>
              <FaEnvelope /> info@hospitals.com
            </p>
          </div>

          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>
              <FaPhoneAlt /> +91 98765 43210
            </p>
            <p>
              <FaPhoneAlt /> +91 89338 3938
            </p>
            <p>
              <FaEnvelope /> info@example.com
            </p>
            <p>
              <FaMapMarkerAlt /> Churu, Hindoun India
            </p>
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
