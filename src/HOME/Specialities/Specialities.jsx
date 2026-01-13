import React, { useState, useEffect } from "react";
import "./Specialities.css";
import bannerImg from "../../assets/Specilities.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaUserMd,
  FaProcedures,
  FaStethoscope,
  FaEye,
  FaBaby,
  FaXRay,
  FaAllergies,
} from "react-icons/fa";

const getIconByTitle = (title) => {
  const t = title.toLowerCase();

  if (t.includes("cardio")) return <FaHeartbeat />;
  if (t.includes("neuro")) return <FaBrain />;
  if (t.includes("ortho")) return <FaBone />;
  if (t.includes("ophthal") || t.includes("eye")) return <FaEye />;
  if (t.includes("derma") || t.includes("skin")) return <FaAllergies />;
  if (t.includes("radio")) return <FaXRay />;
  if (t.includes("neo")) return <FaBaby />;

  return <FaUserMd />; // fallback
};

const Specialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/doctors");

        // 🔥 Group doctors by title (SPECIALITY)
        const grouped = res.data.reduce((acc, doctor) => {
          const speciality = doctor.title;

          if (!acc[speciality]) {
            acc[speciality] = {
              title: speciality,
              icon: getIconByTitle(speciality),
              doctors: [],
            };
          }

          acc[speciality].doctors.push({
            _id: doctor._id,
            name: doctor.name,
            contact: doctor.contact,
            image: doctor.image,
          });

          return acc;
        }, {});

        setSpecialities(Object.values(grouped));
      } catch (error) {
        console.error("Failed to fetch doctors", error);
      }
    };

    fetchDoctors();
  }, []);

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
        {specialities.map((item, index) => (
          <div
            key={index}
            className={`speciality-card ${expanded === index ? "expanded" : ""
              }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>

            {/* Doctors list */}
            <div className={`doctors-list ${expanded === index ? "show" : ""}`}>
              {item.doctors.map((doc) => (
                <div className="doctor" key={doc._id}>
                  <div>
                    <p className="doctor-name">{doc.name}</p>
                    <p className="doctor-type">{item.title}</p>
                  </div>
                  <button
                    className="book-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // card expand click avoid
                      navigate(`/book-appointment/${doc._id}`);
                    }}
                  >
                    Book Now
                  </button>

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
