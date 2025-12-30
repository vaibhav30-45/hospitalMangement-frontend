import React from 'react'
import "./Ourdoctor.css"

const doctors = [
  {
    name: "Dr.apeksha rai",
    title: "Consultant Orthopaedic Surgeon",
    image: "https://www.easytoken.in/uploads/92cc60941eac83b4ee1158dc02650f25.jpg"
  },
  {
    name: "Dr. shivansh Agrawal",
    title: "Laparoscopic GI & Bariatric Surgeon",
    image: "https://starhospitalsproduction.s3.amazonaws.com/dZmAgKYV2eCfSV8tqxqzOxDYrEqmkfFrnoel3pVo.jpg"
  },
  {
    name: "Dr. Aditya jain",
    title: "Consultant Neurosurgeon, Brain & Spine Surgeon & Endovascular Surgeon",
    image: "https://marsleevamedicity.com/wp-content/uploads/2024/08/Dr-Anand-S_Web.jpg"
  },
  {
    name: "Dr. piet lunre",
    title: "Neonatologist & Pediatrician",
    image: "https://www.meitra.com/public/upload_file/67fbd47edc6d01744557182.jpg"
  },
  {
    name: "Dr.nikhil joshi",
    title: "Dermatologist",
    image: "https://images1-fabric.practo.com/doctor/594182/dr-pratap-saini-67987efa5b00e.JPG"
  },
  {
    name: "Dr. Priya Malhotra",
    title: "Gynecologist",
    image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/dr_meenal_atharkar_d691fdd29f.png"
  },
  {
    name: "Dr. Kavita Shah",
    title: "Speech & Hearing Therapist ",
    image: "https://www.carmelhospitalpala.org/uploads/doctors/dr_0022_Layer-3-1694684586.jpg"
  },
  {
    name: "Dr. Ritu Kapoor",
    title: "Consultant ENT Surgeon",
    image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Shivangi_Sharma_with_logo_1_removebg_preview_fa8a107019.png"
  },
   {
    name: "Dr. Sanjay Patel",
    title: "Counsultant Cardiologist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSliw1CncRaW5cunJnKP1YH1tg5Mfr6EJE9Q&s"
  },
   {
    name: "Dr. Mohit gupta",
    title: "Radiologist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo59ZbUWkalEmDgUf-yiAhaAh15hak9r27eQ&s"
  },
   {
    name: "Dr. Yash patel",
    title: "Psychotherapist & Sex Therapist",
    image: "https://media.istockphoto.com/id/1299903110/photo/young-doctor-in-office-standing-health-care-concept.webp?a=1&s=612x612&w=0&k=20&c=-zIHqTK9x4vP2LyNfwSiw5v33E3BqkbeCm02mfmzFlQ="
  },
   {
    name: "Dr. shivam dehra",
    title: "Ophthalmologist",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFjIwVVqUARRg/profile-displayphoto-scale_400_400/B56Zlil1K8IAAk-/0/1758295710292?e=2147483647&v=beta&t=oEZud2q4-O7-UpxYiU6F9h2Z1iG2U-wPHaIzvWC3VSc"
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
