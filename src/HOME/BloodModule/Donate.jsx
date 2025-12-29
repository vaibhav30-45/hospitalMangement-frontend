import React from "react";
import "./Donate.css";

const DonorRegistration = () => {
  return (
    <div className="donor-bg">
      <div className="donor-page">
        <h1>Blood Donor Registration</h1>
        <p className="donor-quote">
          “Your blood donation can give someone another chance at life.”
        </p>

        <form className="donor-form">
          <input type="text" placeholder="Full Name" required />
          <select required>
            <option value="">Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>AB+</option><option>O+</option><option>O-</option>
          </select>
          <input type="number" placeholder="Age" required />
          <input type="tel" placeholder="Contact Number" required />
          <input type="text" placeholder="City" required />
          <button type="submit">Register as Donor</button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;
