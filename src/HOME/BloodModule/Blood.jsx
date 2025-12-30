import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blood.css";

const Blood = () => {
  // State
  const [bloodData, setBloodData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    units: "",
    contact: "",
    urgency: "Normal",
  });

  // Fetch blood inventory from backend
  useEffect(() => {
    fetchBloodData();
  }, []);

  const fetchBloodData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blood");
      setBloodData(res.data);
    } catch (error) {
      console.log("Error fetching blood data", error);
    }
  };

  // Get status for CSS and text
  const getStatus = (units) => {
    if (units === 0) return "not";
    if (units <= 2) return "low";
    return "available";
  };

  // Form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit blood request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blood/request",
        formData
      );

      alert("Blood request submitted successfully ❤️");

      setFormData({
        name: "",
        bloodGroup: "",
        units: "",
        contact: "",
        urgency: "Normal",
      });

      // Refresh inventory
      fetchBloodData();
    } catch (error) {
      alert(error.response?.data?.message || "Blood request failed");
    }
  };

  return (
    <div className="blood-page">
      {/* Hero Section */}
      <div className="blood-hero">
        <div className="blood-header">
          <h1>Blood Bank</h1>
          <p>Save Lives by Donating Blood</p>
        </div>
        <div className="emergency-box">
          🚨 Emergency Blood Required? Call: <strong>+91 98774 98773</strong>
        </div>
      </div>

      {/* Blood Availability */}
      <div className="blood-availability-section">
        <h2 className="section-title">
          <strong>Blood Availability</strong>
        </h2>

        <div className="blood-grid">
          {bloodData.map((item) => (
            <div className={`blood-card ${getStatus(item.units)}`} key={item._id}>
              <h3>{item.bloodGroup}</h3>
              <p>{item.units} Units</p>
              <span className="status">
                {getStatus(item.units) === "available"
                  ? "Available"
                  : getStatus(item.units) === "low"
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
          value={formData.name}
          onChange={handleChange}
          placeholder="Patient Name"
          required
        />
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
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
          value={formData.units}
          onChange={handleChange}
          placeholder="Required Units"
          required
        />
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
        >
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