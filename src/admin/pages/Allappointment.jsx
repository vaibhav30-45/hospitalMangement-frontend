import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllAppointments.css";

import Header from "../components/Header"; // Sidebar is already in AdminLayout, remove duplicate
import { useOutletContext } from "react-router-dom"; // Optional if you want context from layout

const Allappointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(
        "http://localhost:5000/api/appointments/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppointments(res.data.appointments);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch appointments");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.put(
        `http://localhost:5000/api/appointments/status/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // UI refresh
      fetchAppointments();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  return (
    <div className="content">
      <Header />

      <div className="all-app-container">
        <h1>All Appointments</h1>

        {loading ? (
          <p>Loading appointments...</p>
        ) : appointments.length === 0 ? (
          <p>No appointments found</p>
        ) : (
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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item._id} >
                  <td>{item.fullName}</td>
                  <td>{item.department}</td>
                  <td>{item.doctor}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.symptoms}</td>
                  <td> <span
                    style={{
                      color:
                        item.status === "Pending"
                          ? "orange"
                          : item.status === "Confirmed"
                            ? "green"
                            : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {item.status}
                  </span></td>
                  <td>
                    <button
                      onClick={() => updateStatus(item._id, "Confirmed")}
                      className="confirm-btn"
                    >
                      Confirm
                    </button>

                    <button
                      onClick={() => updateStatus(item._id, "Cancelled")}
                      className="reject-btn"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Allappointment;