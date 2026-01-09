import React from "react";
import "./AllAppointments.css";

import Header from "../components/Header"; // Sidebar is already in AdminLayout, remove duplicate
import { useOutletContext } from "react-router-dom"; // Optional if you want context from layout

const Allappointment = () => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const cleanAppointments = appointments.filter(
    (a) =>
      a.name &&
      a.department &&
      a.doctor &&
      a.date &&
      a.time &&
      a.mobile &&
      a.gender
  );

  return (
    <div className="content">
      <Header />

      <div className="all-app-container">
        <h1>All Appointments</h1>

        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Symptoms</th>
            </tr>
          </thead>

          <tbody>
            {cleanAppointments.map((item, index) => (
              <tr
                key={`${item.name}-${item.date}-${item.time}-${index}`} // ✅ Unique key
              >
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.symptoms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allappointment;


