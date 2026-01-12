import React, { useState, useEffect } from "react";
import "./BookAppointment.css";
import axios from "axios";

const BookAppointment = () => {
  const [isReschedule, setIsReschedule] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    symptoms: "",
  });

  const [lastStatus, setLastStatus] = useState("");
  const [lastAppointmentId, setLastAppointmentId] = useState("");

  /* ================= FETCH DOCTORS FROM BACKEND ================= */
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(res.data);

        // unique departments from doctor.title
        const uniqueDepartments = [
          ...new Set(res.data.map((doc) => doc.title)),
        ];
        setDepartments(uniqueDepartments);
      } catch (error) {
        console.error("Failed to load doctors");
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isReschedule) {
        // BOOK
        const res = await axios.post(
          "http://localhost:5000/api/appointments/book",
          {
            ...form,
            status: "Pending",
          }
        );

        setLastStatus(res.data.appointment.status);
        setLastAppointmentId(res.data.appointment._id);

        alert("Appointment Booked Successfully");
      } else {
        // RESCHEDULE
        await axios.put(
          `http://localhost:5000/api/appointments/reschedule/${appointmentId}`,
          form
        );

        alert("Appointment Rescheduled Successfully");
      }

      setForm({
        department: "",
        doctor: "",
        date: "",
        time: "",
        fullName: "",
        mobile: "",
        email: "",
        age: "",
        gender: "",
        symptoms: "",
      });

      setAppointmentId("");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="form-container">
        <div className="switch-buttons">
          <button 
            className={!isReschedule ? "active-btn" : ""}
            onClick={() => setIsReschedule(false)}
          >
            Book Appointment
          </button>

          <button
            className={isReschedule ? "active-btn" : ""}
            onClick={() => setIsReschedule(true)}
          >
            Reschedule Appointment
          </button>
        </div>

        <h1>{isReschedule ? "Reschedule Appointment" : "Book Appointment"}</h1>

        <form onSubmit={handleSubmit}>
          
          {isReschedule && (
            <div className="single-row">
              <label>Appointment ID</label>
              <input
                type="text"
                placeholder="Enter Appointment ID"
                value={appointmentId}
                onChange={(e) => setAppointmentId(e.target.value)}
              />
            </div>
          )}

          <div className="grid-container">
            <div>
              <label>Department</label>
              <select name="department" onChange={handleChange} value={form.department}>
                <option value="">Select Department</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Doctor</label>
              <select
                name="doctor"
                onChange={handleChange}
                disabled={!form.department}
                value={form.doctor}
              >
                <option value="">Select Doctor</option>
                {doctors
                .filter((doc) => doc.title === form.department)
                .map((doc) => (
                    <option key={doc._id} value={doc.name}>{doc.name}</option>
                  ))}
              </select>
            </div>

            <div>
              <label>Date</label>
              <input type="date" name="date" onChange={handleChange} value={form.date} />
            </div>

            <div>
              <label>Time</label>
              <select name="time" onChange={handleChange} value={form.time}>
                <option value="">Select Time</option>
                <option>11:00 AM</option>
                <option>10:00 AM</option>
                <option>09:00 AM</option>
                <option>10:30 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>

            <div>
              <label>Full Name</label>
              <input type="text" name="fullName" onChange={handleChange} value={form.fullName} />
            </div>

            <div>
              <label>Age</label>
              <input type="number" name="age" onChange={handleChange} value={form.age} />
            </div>

            <div>
              <label>Mobile Number</label>
              <input type="text" name="mobile" onChange={handleChange} value={form.mobile} />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} value={form.email} />
            </div>

            <div>
              <label>Gender</label>
              <select name="gender" onChange={handleChange} value={form.gender}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

          </div>

          <div className="symptoms-box">
            <label>Symptoms</label>
            <textarea name="symptoms" rows="3" onChange={handleChange} value={form.symptoms}></textarea>
          </div>

          <button type="submit">
            {isReschedule ? "Update Appointment" : "Book Appointment"}
          </button>
        </form>
    {lastStatus && (
  <div className="status-box">
    <h3> Your Appointment Booked Successfully </h3>
    <p><strong>Appointment ID:</strong> {lastAppointmentId}</p>

    <p>
      <strong>Status:</strong>{" "}
      <span style={{ color: "orange", fontWeight: "bold" }}>
        {lastStatus}
      </span>
    </p>

    <p style={{ fontSize: "16px", color: "#b42121ff" }}>
      Please wait for doctor confirmation.
    </p>
  </div>
)}

      </div>
    </div>
  );
};

export default BookAppointment;