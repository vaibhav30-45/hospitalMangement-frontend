import React from "react";
import "./Specialities.css";
import bannerImg from "../../assets/Specilities.jpg";


import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaUserMd,
  FaProcedures,
  FaStethoscope
} from "react-icons/fa";


const specialitiesData = [
  {
    icon: <FaProcedures />,
    title: "Cardio Thoracic & Vascular Surgery"
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiology"
  },
  {
    icon: <FaStethoscope />,
    title: "Otolaryngology (ENT)"
  },
  {
    icon: <FaBrain />,
    title: "Neurosurgery"
  },
  {
    icon: <FaUserMd />,
    title: "Neurology"
  },
  {
    icon: <FaBone />,
    title: "Orthopaedic Surgery"
  },
  {
    icon: <FaProcedures />,
    title: "Cardio Thoracic & Vascular Surgery"
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiology"
  },
  {
    icon: <FaStethoscope />,
    title: "Otolaryngology (ENT)"
  },
  {
    icon: <FaBrain />,
    title: "Neurosurgery"
  },
  {
    icon: <FaUserMd />,
    title: "Neurology"
  },
  {
    icon: <FaBone />,
    title: "Orthopaedic Surgery"
  }
  
];

const Specialities = () => {
  return (
    <div className="specialities-page">
      {/* Banner */}
      <div
        className="specialities-banner"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ), url(${bannerImg})`
        }}
      >
        <h1>Our Specialities</h1>
        <p>Home / Specialities</p>
      </div>

      {/* Cards */}
      <div className="specialities-container">
        {specialitiesData.map((item, index) => (
          <div className="speciality-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
