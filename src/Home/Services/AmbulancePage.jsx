import React, { useState } from "react";
import "./AmbulancePage.css";

export default function AmbulancePage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "",
    pickupAddress: "",
    dropAddress: "",
    date: "",
    time: "",
    ambulanceType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ambulance Booked Successfully!");
    console.log("Booking Data:", form);
  };

  return (
    <>
     
      <div className="ambulance-fixed-box">
        <i className="fa-solid fa-truck-medical"></i> Emergency Ambulance:{" "}
        <strong>+91 98765 43210</strong>
      </div>


      <div className="ambulance-section">
        <div className="left">
          <h1>Ambulance Service</h1>
          <p>
            It is imperative that a patient reaches a hospital within the Golden
            hour in case of an emergency. Sometimes it might not be a medical
            emergency but a scheduled visit for Dialysis, Delivery or transfer
            to another City Hospital for better treatment.
          </p>

          <div className="features">
            <ul>
              <li><i className="fa-solid fa-check"></i> Medical Necessity</li>
              <li><i className="fa-solid fa-check"></i> 24/7 Assistance</li>
              <li><i className="fa-solid fa-check"></i> Additional Benefits</li>
            </ul>

            <ul>
              <li><i className="fa-solid fa-check"></i> Flexible Payment</li>
              <li><i className="fa-solid fa-check"></i> Customer Support</li>
            </ul>
          </div>

          <button className="quote-btn">Book Ambulance</button>
        </div>

        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1707411839119-6dabc7c126d9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctors"
            className="img1"
          />
          <img
            src="https://media.istockphoto.com/id/1154816287/photo/paramedic-team-pushing-stretcher.jpg?s=1024x1024&w=is&k=20&c=0lMZj1lEcJllb9Ke_E3gfI3c0_pMEBt_kK9egwPTgMw="
            alt="Ambulance"
            className="img2"
          />
        </div>
      </div>

    
      <div className="feature-cards">

        <div className="card">
          <div className="icon-circle">
            <i className="fa-solid fa-shield-heart"></i>
          </div>
          <h3>Impeccable Safety</h3>
          <p>Aliquam auctor, lectus sit amet egestas eleifend.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <i className="fa-solid fa-id-card"></i>
          </div>
          <h3>Fully Licensed</h3>
          <p>Curabitur congue, tortor at semper tristique.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <i className="fa-solid fa-truck-medical"></i>
          </div>
          <h3>Available 24/7</h3>
          <p>Pellentesque elit mauris, malesuada eget consectetur.</p>
        </div>

      </div>

     
      <div className="ambulance-wrapper">
        <h1 className="page-title">Ambulance Booking</h1>

        <div className="ambulance-form-container">
          <h2>Book Ambulance</h2>

          <form className="ambulance-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter contact number"
                onChange={handleChange}
                required
              />
            </div>

            

            <div className="form-group">
              <label>Drop Address</label>
              <textarea
                name="dropAddress"
                placeholder="Enter exact Drop location"
                onChange={handleChange}
                required
              ></textarea>
            </div>


            <div className="multi">
              <div className="form-group">
                <label>Pickup Date</label>
                <input type="date" name="date" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Pickup Time</label>
                <input type="time" name="time" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Ambulance Type</label>
              <select name="ambulanceType" onChange={handleChange} required>
                <option value="">Select Ambulance</option>
                <option>Basic Ambulance</option>
                <option>Advance Life Support (ALS)</option>
                <option>ICU Ambulance</option>
                <option>Cardiac Ambulance</option>
              </select>
            </div>

            <button type="submit" className="btn-ambulance">
              Book Ambulance
            </button>

          </form>
        </div>
      </div>
    </>
  );
}


