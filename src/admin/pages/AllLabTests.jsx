import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./AllLabTests.css";
import axios from "axios";

const AllLabTests = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabBookings = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await axios.get(
          "http://localhost:5000/api/testbookings/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(res.data);
      } catch (error) {
        console.error(
          "Error fetching lab bookings:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLabBookings();
  }, []);

  return (
    <div className="content">
      <Header />

      <div className="all-lab-container">
        <h1>All Laboratory Bookings</h1>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Date</th>
                <th>Mobile</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((item) => (
                  <tr key={item._id}>
                  <td>{item.testId?.testName}</td>
                    <td>{item.patientId?.name}</td>
                    <td>{item.patientId?.age}</td>
                    <td>{new Date(item.requestDate).toLocaleDateString()}</td>
                    <td>{item.patientId?.mobile}</td>
                </tr>
              ))
               ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No Lab Bookings Found
                </td>
              </tr>
            )}
          </tbody>
          </table>
        )}
    </div>
    </div >
  );
};

export default AllLabTests;