import React from "react";
import "./Laboratory.css";
import { FaMicroscope, FaFlask, FaVials, FaUserNurse } from "react-icons/fa";

export default function Laboratory() {
  return (
    <>
      
      <div className="lab-banner">
        <div className="lab-left">
          <img
            src="https://media.istockphoto.com/id/1247644575/photo/scientist-working-on-coronavirus-vaccine-at-lab.jpg?s=1024x1024&w=is&k=20&c=6KW1OqAh1_I_2VjswaYKkxQexSrIAKBUXDONC0krUL0="
            alt="Doctor Lab"
            className="lab-image"
          />
        </div>

        <div className="lab-right">
          <span className="lab-badge">LABORATORY</span>

          <h1>
            We Provide Reliable & High-Quality <br /> Clinical Service
          </h1>

          <p className="lab-desc">
            Welcome to the Labout Rare Chemistry Research Documentation Center, a
            hub for exploration & discovery in the realm of uncommon & extraordinary
            chemical phenomena. We have been partnering with the laboratory service
            for several projects, and their commitment to quality assurance is
            unparalleled. The detailed documentation and stringent quality control
            measures instill confidence in the accuracy of their results.
          </p>

          <ul className="lab-features">
            <li>✔ Modify the theming of the prebuilt automation platform</li>
            <li>✔ Override the default strings for any element</li>
          </ul>
        </div>
      </div>
<div className="features-container">

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-microscope"></i>
    </div>

    <h3>Data Technology</h3>
    <hr />
    <p>
      Our clinical pathologists are available seven days a week to render diagnoses.
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-flask"></i>
    </div>

    <h3>Materials Analysis</h3>
    <hr />
    <p>
      24/7 access to real-time, study-wide data for your project teams, our labs,
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-vial"></i>
    </div>

    <h3>Flow Cytometry</h3>
    <hr />
    <p>
      Visibility of the sample and the whole chain of custody beginning at collection
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-user-nurse"></i>
    </div>

    <h3>Diabetes Testing</h3>
    <hr />
    <p>
      The newest automation technology is used in our labs to improve data quality.
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

</div>
<div className="features-container">

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-microscope"></i>
    </div>

    <h3>Data Technology</h3>
    <hr />
    <p>
      Our clinical pathologists are available seven days a week to render diagnoses.
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-flask"></i>
    </div>

    <h3>Materials Analysis</h3>
    <hr />
    <p>
      24/7 access to real-time, study-wide data for your project teams, our labs,
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-vial"></i>
    </div>

    <h3>Flow Cytometry</h3>
    <hr />
    <p>
      Visibility of the sample and the whole chain of custody beginning at collection
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-circle">
      <i class="fa-solid fa-user-nurse"></i>
    </div>

    <h3>Lab Technician</h3>
    <hr />
    <p>
      The newest automation technology is used in our labs to improve data quality.
    </p>

    <div className="arrow-circle">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>

</div>

    </>
  );
}

