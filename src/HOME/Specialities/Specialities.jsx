import React, { useState } from "react";
import "./Specialities.css";
import bannerImg from "../../assets/Specilities.jpg";

import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaUserMd,
  FaProcedures,
  FaStethoscope,
} from "react-icons/fa";

const specialitiesData = [
  {
    icon: <FaProcedures />,
    title: "Cardio Thoracic & Vascular Surgery",
    doctors: [
      { name: "Dr. A", type: "Consultant Surgeon" },
      { name: "Dr. B", type: "Consultant Surgeon" },
    ],
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    doctors: [
      { name: "Dr. Vidyut Jain", type: "Consultant Cardiologist" },
      { name: "Dr. Girish Kawthekar", type: "Consultant Cardiologist" },
      { name: "Dr. Rajeev Khare", type: "Interventional Cardiologist" },
      {
        name: "Dr. Paritosh Kumar Rajput",
        type: "Consultant Interventional Cardiologist",
      },
    ],
  },
  {
    icon: <FaStethoscope />,
    title: "Otolaryngology (ENT)",
    doctors: [
      { name: "Dr. ENT 1", type: "Consultant ENT" },
      { name: "Dr. ENT 2", type: "Consultant ENT" },
    ],
  },
  {
    icon: <FaBrain />,
    title: "Neurosurgery",
    doctors: [
      { name: "Dr. A", type: "Consultant Surgeon" },
      { name: "Dr. B", type: "Consultant Surgeon" },
    ],
  },
  {
    icon: <FaUserMd />,
    title: "Neurology",
    doctors: [
      { name: "Dr. Vidyut Jain", type: "Consultant Cardiologist" },
      { name: "Dr. Girish Kawthekar", type: "Consultant Cardiologist" },
      { name: "Dr. Rajeev Khare", type: "Interventional Cardiologist" },
      {
        name: "Dr. Paritosh Kumar Rajput",
        type: "Consultant Interventional Cardiologist",
      },
    ],
  },
  {
    icon: <FaBone />,
    title: "Orthopaedic Surgery",
    doctors: [
      { name: "Dr. ENT 1", type: "Consultant ENT" },
      { name: "Dr. ENT 2", type: "Consultant ENT" },
    ],
  },
];

const Specialities = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="specialities-page">
      {/* Banner */}
      <div
        className="specialities-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bannerImg})`,
        }}
      >
        <h1>Our Specialities</h1>
        <p>Home / Specialities</p>
      </div>

      {/* Cards */}
      <div className="specialities-container">
        {specialitiesData.map((item, index) => (
          <div
            key={index}
            className={`speciality-card ${
              expanded === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>

            {/* Doctors list */}
            <div className={`doctors-list ${expanded === index ? "show" : ""}`}>
              {item.doctors.map((doc, i) => (
                <div className="doctor" key={i}>
                  <div>
                    <p className="doctor-name">{doc.name}</p>
                    <p className="doctor-type">{doc.type}</p>
                  </div>
                  <button className="book-btn">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
