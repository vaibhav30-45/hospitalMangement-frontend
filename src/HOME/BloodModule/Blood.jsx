import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blood.css";

const bloodData = [
  { group: "A+", units: 12, status: "available" },
  { group: "A-", units: 4, status: "low" },
  { group: "B+", units: 8, status: "available" },
  { group: "B-", units: 2, status: "low" },
  { group: "AB+", units: 0, status: "not" },
  { group: "O+", units: 15, status: "available" },
  { group: "O-", units: 1, status: "low" },
  { group: "AB-", units: 1, status: "low" },
];

const Blood = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    units: "",
    contact: "",
    urgency: "Normal",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Blood request submitted successfully!");
  };

  return (
    <div className="blood-page">
      <div className="blood-hero">
        {/* Header */}
        <div className="blood-header">
          <h1>Blood Bank</h1>
          <p>Save Lives by Donating Blood</p>
        </div>

        {/* Emergency */}
        <div className="emergency-box">
          🚨 Emergency Blood Required? Call: <strong>+91 98774 98773</strong>
        </div>
      </div>

      {/* Availability */}
      <div className="blood-availability-section">
        <h2 className="section-title">
          <strong>Blood Availability</strong>
        </h2>

        <div className="blood-grid">
          {bloodData.map((item, index) => (
            <div className={`blood-card ${item.status}`} key={index}>
              <h3>{item.group}</h3>
              <p>{item.units} Units</p>
              <span className="status">
                {item.status === "available"
                  ? "Available"
                  : item.status === "low"
                  ? "Low Stock"
                  : "Not Available"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Request Form */}
      <h2 className="section-title">
        <strong>Request Blood</strong>
      </h2>
      <form className="blood-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />
        <select name="bloodGroup" onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>O+</option>
          <option>O-</option>
        </select>
        <input
          type="number"
          name="units"
          placeholder="Required Units"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
          required
        />
        <select name="urgency" onChange={handleChange}>
          <option>Normal</option>
          <option>Emergency</option>
        </select>
        <button type="submit">Submit Request</button>
      </form>

      {/* Donate Section */}
      <div className="donate-section">
        <h2>Donate Blood, Save Life ❤️</h2>
        <p>
          A single blood donation can save up to three lives. Your small step
          can become someone’s hope for life.
        </p>
        <Link to="/donor-registration" className="donate-btn">
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Blood;
