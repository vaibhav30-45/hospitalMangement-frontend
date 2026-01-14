import React from "react";
import Header from "../components/Header";
import "./AllBloodRequests.css";

const AllBloodRequests = () => {
  const requests = JSON.parse(localStorage.getItem("bloodRequests")) || [];

  const cleanData = requests.filter(
    (r) => r.name && r.bloodGroup && r.units && r.contact && r.urgency
  );

  return (
    <div className="content">
      <Header />

      <div className="all-blood-container">
        <h1>All Blood Requests</h1>

        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Blood Group</th>
              <th>Units</th>
              <th>Contact</th>
              <th>Urgency</th>
            </tr>
          </thead>

          <tbody>
            {cleanData.map((item, index) => (
              <tr key={`${item.name}-${index}`}>
                <td>{item.name}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.units}</td>
                <td>{item.contact}</td>
                <td>{item.urgency}</td>
              </tr>
            ))}

            {cleanData.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No Blood Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBloodRequests;
