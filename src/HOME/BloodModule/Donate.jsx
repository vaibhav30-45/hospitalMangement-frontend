import React, { useState } from "react";
import axios from "axios";
import "./Donate.css";

const DonorRegistration = () => {
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blood/AddDonor",
        donor
      );
      alert("Donor registered successfully ❤️");

      setDonor({
        name: "",
        email: "",
        phone: "",
        address: "",
        bloodGroup: "",
      });
    } catch (error) {
      alert("Donor registration failed");
    }
  };


  return (
    <div className="donor-bg">
      <div className="donor-page">
        <h1>Blood Donor Registration</h1>
        <p className="donor-quote">
          “Your blood donation can give someone another chance at life.”
        </p>

        <form className="donor-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={donor.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <select name="bloodGroup" value={donor.bloodGroup} onChange={handleChange} required>
            <option value="">Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>AB+</option><option>O+</option><option>O-</option>
          </select>
          <input type="number" placeholder="Age" required />
          <input
            type="tel"
            name="phone"
            value={donor.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <input
            type="text"
            name="address"
            value={donor.address}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            type="email"
            name="email"
            value={donor.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">Register as Donor</button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;
