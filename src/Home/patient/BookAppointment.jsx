import React, { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    symptoms: "",
  });

  const doctorList = {
    Cardiology: ["Dr. Sharma", "Dr. Mehta"],
    Dermatology: ["Dr. Pooja", "Dr. Singh"],
    Orthopedic: ["Dr. Rana", "Dr. Joshi"],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="app-wrapper">
      <div className="form-container">

        <h1>Book Appointment</h1>

        <form onSubmit={handleSubmit}>

        
          <div className="grid-container">

            <div>
              <label>Department</label>
              <select name="department" onChange={handleChange}>
                <option value="">Select Department</option>
                {Object.keys(doctorList).map((dep) => (
                  <option key={dep}>{dep}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Doctor</label>
              <select
                name="doctor"
                onChange={handleChange}
                disabled={!form.department}
              >
                <option value="">Select Doctor</option>
                {form.department &&
                  doctorList[form.department].map((doc) => (
                    <option key={doc}>{doc}</option>
                  ))}
              </select>
            </div>

            <div>
              <label>Date</label>
              <input type="date" name="date" onChange={handleChange} />
            </div>

            <div>
              <label>Time</label>
              <select name="time" onChange={handleChange}>
                <option value="">Select Time</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
              </select>
            </div>

            <div>
              <label>Full Name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>

            <div>
              <label>Age</label>
              <input type="number" name="age" onChange={handleChange} />
            </div>

            <div>
              <label>Mobile Number</label>
              <input type="text" name="mobile" onChange={handleChange} />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>

            <div>
              <label>Gender</label>
              <select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

          </div>

          
          <label>Symptoms</label>
          <textarea
            name="symptoms"
            rows="3"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book Appointment</button>
        </form>

      </div>
    </div>
  );
};

export default BookAppointment;