import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // ✅ Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  // ✅ Input Change Handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Form Submit → Backend API Call
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
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="main-title">Contact Us</h1>
      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          
          {/* ✅ LEFT FORM (Backend Connected) */}
          <div className="contact-left">
            <h2>Get in Touch</h2>

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
                type="number"
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

          {/* ✅ RIGHT SIDE (UNCHANGED AS YOU SAID) */}
          <div className="contact-right">
            <h2>Contact Details</h2>
            <br />
            <p>Phone : +91 98765 43210, +91 893383938</p>
            <p>Email : info@example.com</p>
            <p>Address : Main Street, Main Road, Churu, Hindoun India</p>

            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MAP (UNCHANGED AS YOU SAID) */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1730.4502532837778!2d77.24051025281832!3d28.65629490029771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1764754026747!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;

