import React, { useState } from "react";
import "./Laboratory.css";
import {
  FaMicroscope,
  FaFlask,
  FaVials,
  FaUserNurse,
  FaArrowRight,
} from "react-icons/fa";

export default function Laboratory() {
  const [showForm, setShowForm] = useState(false);
  const [testName, setTestName] = useState("");

  const tests = [
    {
      name: "Complete Blood Count",
      desc: "Measures red blood cells, white blood cells & platelets.",
      icon: <FaMicroscope />,
    },
    {
      name: "Lipid Profile Test",
      desc: "Checks cholesterol and triglyceride levels.",
      icon: <FaFlask />,
    },
    {
      name: "Liver Function Test",
      desc: "Evaluates liver enzymes and overall liver health.",
      icon: <FaVials />,
    },
    {
      name: "Kidney Function Test",
      desc: "Monitors kidney performance and waste filtration.",
      icon: <FaUserNurse />,
    },
    {
      name: "ThyroidProfile(T3,T4,TSH)",
      desc: "Checks thyroid hormone levels in the body.",
      icon: <FaMicroscope />,
    },
    {
      name: "Diabetes Test(HbA1c)",
      desc: "Measures average blood sugar over 3 months.",
      icon: <FaFlask />,
    },
    {
      name: "Urine Routine",
      desc: "Detects urinary tract infections & kidney issues.",
      icon: <FaVials />,
    },
    {
      name: "Vitamin D & B12 Test",
      desc: "Identifies vitamin deficiency in the body.",
      icon: <FaUserNurse />,
    },
  ];

  const openForm = (name) => {
    setTestName(name);
    setShowForm(true);
  };

  return (
    <>

     
      <div className="lab-banner">
        <div className="lab-left">
          <img
            src="https://www.oneeducation.org.uk/wp-content/uploads/2020/08/Become-a-Medical-Laboratory-Technician.png"
            alt="Laboratory"
            className="lab-image"
          />
        </div>

        <div className="lab-right">
          <span className="lab-badge">LABORATORY</span>
          <h1>
            We Provide Reliable & High-Quality <br /> Clinical Service
          </h1>

          <p className="lab-desc">
            Welcome to the Rare Chemistry Research Documentation Center. We ensure
            quality assurance, accuracy, and reliable laboratory testing services.
          </p>

          <ul className="lab-features">
            <li>✔ Advanced laboratory equipment, 24/7 laboratory support services</li>
            <li>✔ Trusted & certified professionals, Accurate & timely test reports</li>
          </ul>
        </div>
      </div>


      <div className="lab-cards">
        {tests.map((test, index) => (
          <div className="lab-card" key={index}>
            <div className="lab-icon">{test.icon}</div>

            <h3>{test.name}</h3>
            <span className="line"></span>

            <p>{test.desc}</p>

            <button
              className="lab-btn"
              onClick={() => openForm(test.name)}
            >
              <span>Book Now</span>
              <span className="btn-arrow">
                <FaArrowRight />
              </span>
            </button>
          </div>
        ))}
      </div>

 
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Book Laboratory Test</h2>

            <form className="book-form">
              <input value={testName} readOnly />
              <input type="text" placeholder="Patient Name" />
              <input type="number" placeholder="Age" />
              <input type="date" />
              <input type="tel" placeholder="Mobile Number" />

              <div className="form-actions">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};