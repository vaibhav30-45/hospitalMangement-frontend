import React from 'react'
import "./Doctors.css"
import d1 from "../../assets/d1.webp"
import d2 from "../../assets/d2.webp"
import d3 from "../../assets/d3.jpg"
import d4 from "../../assets/d4.png"
import d5 from "../../assets/d5.jpg"
import d6 from "../../assets/d6.jpg"
import d7 from "../../assets/d7.png"
import d8 from "../../assets/d8.jpg"
import d9 from "../../assets/d9.jpg"
import d10 from "../../assets/d10.webp"
import d11 from "../../assets/d11.jpg"
import d12 from "../../assets/d12.jpg"

const doctors = [
  {
    name: "Dr.apeksha rai",
    title: "Consultant Orthopaedic Surgeon",
    image: d1
  },
  {
    name: "Dr. shivansh Agrawal",
    title: "Laparoscopic GI & Bariatric Surgeon",
    image: d2
  },
  {
    name: "Dr. Aditya jain",
    title: "Consultant Neurosurgeon, Brain & Spine Surgeon & Endovascular Surgeon",
    image:d3
  },
  {
    name: "Dr. piet lunre",
    title: "Neonatologist & Pediatrician",
    image: d4
  },
  {
    name: "Dr.nikhil joshi",
    title: "Dermatologist",
    image: d5
  },
  {
    name: "Dr. Priya Malhotra",
    title: "Gynecologist",
    image: d6
  },
  {
    name: "Dr. Kavita Shah",
    title: "Speech & Hearing Therapist ",
    image: d7
  },
  {
    name: "Dr. Ritesh Kapoor",
    title: "Consultant ENT Surgeon",
    image: d8
  },
   {
    name: "Dr. Sanjay Patel",
    title: "Counsultant Cardiologist",
    image: d9
  },
   {
    name: "Dr. Mohit gupta",
    title: "Radiologist",
    image: d10
  },
   {
    name: "Dr. Yash patel",
    title: "Psychotherapist & Sex Therapist",
    image: d11
  },
   {
    name: "Dr. shivam dehra",
    title: "Ophthalmologist",
    image: d12
  },

];

const Ourdoctor = () => {
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
      {doctors.map((doc, index) => (
        <div className="doctor-card" key={index}>
          <div className="doctor-image">
            <img src={doc.image} alt={doc.name} />
          </div>

          <div className="doctor-info">
            <h3>{doc.name}</h3>
            <p>{doc.title}</p>
          </div>
        </div>
      ))}
    </div>
  
    </>
  )
}

export default Ourdoctor;