import React, { useEffect, useState } from "react";
import "./Doctors.css";
import axios from "axios";

const Ourdoctor = () => {
  const [doctors, setDoctors] = useState([]);

  // 🔹 Fetch doctors from backend
  const fetchDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/doctors");
      setDoctors(res.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <>
      <div className="ourdoctors">
        <div className="doctorscontent">
          <h1>Our Doctors</h1>
          <p>
            We provide world-class healthcare services with experienced doctors
            and modern facilities.
          </p>
        </div>
      </div>

      <div className="doctor-container">
        {doctors.length === 0 ? (
          <p style={{ textAlign: "center" }}>No doctors available</p>
        ) : (
          doctors.map((doc) => (
            <div className="doctor-card" key={doc._id}>
              <div className="doctor-image">
                <img src={doc.image} alt={doc.name} />
              </div>

              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p>{doc.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Ourdoctor;