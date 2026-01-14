import React from "react";
import Header from "../components/Header";
import "./AllLabTests.css";

const AllLabTests = () => {
  const tests = JSON.parse(localStorage.getItem("labTests")) || [];

  const cleanData = tests.filter(
    (t) => t.testName && t.patientName && t.age && t.date && t.mobile
  );

  return (
    <div className="content">
      <Header />

      <div className="all-lab-container">
        <h1>All Laboratory Bookings</h1>

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
            {cleanData.map((item, index) => (
              <tr key={index}>
                <td>{item.testName}</td>
                <td>{item.patientName}</td>
                <td>{item.age}</td>
                <td>{item.date}</td>
                <td>{item.mobile}</td>
              </tr>
            ))}

            {cleanData.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No Lab Bookings Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLabTests;
