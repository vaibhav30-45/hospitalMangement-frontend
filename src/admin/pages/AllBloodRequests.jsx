import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./AllBloodRequests.css";
import axios from "axios";

const AllBloodRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBloodRequests = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await axios.get(
          "http://localhost:5000/api/blood/requests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching blood requests:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBloodRequests();
  }, []);

  return (
    <div className="content">
      <Header />

      <div className="all-blood-container">
        <h1>All Blood Requests</h1>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Blood Group</th>
                <th>Units</th>
                <th>Contact</th>
                <th>Urgency</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.length > 0 ? (
                requests.map((item) => (
                  <tr key={item._id}>
                    <td>{item.patientName}</td>
                    <td>{item.bloodGroup}</td>
                    <td>{item.units}</td>
                    <td>{item.contact}</td>
                    <td>{item.urgency}</td>
                    <td>{item.status}</td>
                    <td></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                    No Blood Requests Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllBloodRequests;