import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import doc1 from "../assets/d1.webp";
import doc2 from "../assets/d2.webp";
import doc3 from "../assets/d3.jpg";
import doc4 from "../assets/d4.png";
import doc5 from "../assets/d5.jpg";


import "swiper/css";
import "swiper/css/pagination";


import "./Home.css";

const Home = () => {
 
   const testimonials = [
    {
      name: "Ramesh Kumar",
      review: "Doctors were very supportive and treatment was excellent.",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      review: "Clean hospital and very cooperative staff.",
      rating: 4,
    },
    {
      name: "Amit Verma",
      review: "Quick appointment and professional doctors.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
   const doctors = [
  {
    name: "Dr. Apeksha Rai",
    spec: "Orthopaedic Surgeon",
    img: doc1,
  },
  {
    name: "Dr. Shivansh Agrawal",
    spec: "GI & Bariatric Surgeon",
    img: doc2,
  },
  {
    name: "Dr. Aditya Jain",
    spec: "Neurosurgeon",
    img: doc3,
  },
  {
    name: "Dr. Piet Lunre",
    spec: "Neonatologist",
    img: doc4,
  },
  {
    name: "Dr. Nikhil Joshi",
    spec: "Dermatologist",
    img: doc5,
  },
  {
    name: "Dr. Apeksha Rai",
    spec: "Orthopaedic Surgeon",
    img: doc1,
  },
  {
    name: "Dr. Shivansh Agrawal",
    spec: "GI & Bariatric Surgeon",
    img: doc2,
  },
  {
    name: "Dr. Aditya Jain",
    spec: "Neurosurgeon",
    img: doc3,
  },
  {
    name: "Dr. Piet Lunre",
    spec: "Neonatologist",
    img: doc4,
  },
  {
    name: "Dr. Nikhil Joshi",
    spec: "Dermatologist",
    img: doc5,
  },
];


  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Multi-Speciality Hospital</h1>
          <p>Trusted Healthcare | Advanced Treatment | 24x7 Emergency</p>

          {/* <div className="hero-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-outline">Consult Doctor</button>
          </div> */}
          <div className="hero-buttons">
        <Link to="/book-appointment">
       <button className="btn-primary">Book Appointment</button>
  </Link>
</div>

        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="services">
         <div className="service-cards">
  <div className="service-card bg-card opd">
    <div className="overlay"></div>
    <div className="content">
      <h3>Laboratory</h3>
      <button className="hero-btn">View More</button>
    </div>
  </div>

  <div className="service-card bg-card appointment">
    <div className="overlay"></div>
    <div className="content">
      <h3>Get Appointment</h3>
      <Link to="/book-appointment">
       <button className="hero-btn">Book Now</button>
  </Link>
    </div>
  </div>

  <div className="service-card bg-card consultation">
    <div className="overlay"></div>
    <div className="content">
      <h3>Consultation</h3>
      <button className="hero-btn">Learn More</button>
    </div>
  </div>

  <div className="service-card bg-card ambulance">
    <div className="overlay"></div>
    <div className="content">
      <h3>Ambulance</h3>
      {/* <button>Call Now</button> */}
      <div className="ambulance-info">
    <p>
      <i className="fa-solid fa-truck-medical"></i>
      +91 98774 98773
    </p>

    <p>
      <i className="fa-solid fa-phone"></i>
      0731-2443400
    </p>

    <p>
      <i className="fa-solid fa-envelope"></i>
      info@hospitals.com
    </p>
  </div>
    </div>
  </div>

</div>


      </section>

      {/* ABOUT SECTION */}
      {/* <section className="about">
  <div className="about-content">
    <h2>About Our Hospital</h2>
    <p>
      Multi-Speciality Hospital is committed to providing high-quality healthcare
      services with modern infrastructure, experienced doctors, and
      patient-centric care. Our Hospital Management System provides a digital
      solution for managing appointments, patient records, doctors, and hospital
      operations efficiently. It helps healthcare organizations improve
      workflow, reduce paperwork, and deliver better patient care through a
      secure and easy-to-use platform.
    </p>
  </div>
</section> */}
 <section className="home-about">
      <div className="home-about-card">
        <h2>About Our Hospital</h2>

        <p>
          Multi-Speciality Hospital is committed to providing high-quality
          healthcare services with modern infrastructure, experienced doctors,
          and patient-centric care. Our Hospital Management System provides a
          digital solution for managing appointments, patient records, doctors,
          and hospital operations efficiently.
        </p>

        <Link to="/about" className="home-about-btn">
          Read More
        </Link>
      </div>
    </section>
       <section className="home-specialities">
  <h2 className="specialities-heading">Our Specialities</h2>

  <div className="specialities-grid">
    <div className="speciality-card">
      <span className="icon">❤️</span>
      <h4>Cardiology</h4>
    </div>

    <div className="speciality-card">
      <span className="icon">🫁</span>
      <h4>Cardio Thoracic & Vascular Surgery</h4>
    </div>

    <div className="speciality-card">
      <span className="icon">👂</span>
      <h4>ENT (Otolaryngology)</h4>
    </div>

    <div className="speciality-card">
      <span className="icon">🧠</span>
      <h4>Neurosurgery</h4>
    </div>

    <div className="speciality-card">
      <span className="icon">🧠</span>
      <h4>Neurology</h4>
    </div>

    <div className="speciality-card">
      <span className="icon">🦴</span>
      <h4>Orthopaedic Surgery</h4>
    </div>
  </div>
</section>
{/* DOCTORS SLIDER SECTION */}
<section className="home-doctors">
  <h2 className="specialities-heading">Our Doctors 🩺</h2>

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 2500 }}
    pagination={{ clickable: true }}
    spaceBetween={25}
    slidesPerView={4}
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
    
  >
    {doctors.map((doc, index) => (
      <SwiperSlide key={index}>
        <div className="doctor-card">
  <div className="doctor-img">
    <img src={doc.img} alt={doc.name} />
  </div>

  <h4>{doc.name}</h4>
  <p>{doc.spec}</p>
</div>

      </SwiperSlide>
    ))}
  </Swiper>
</section>



















{/* TESTIMONIAL SECTION */}
<section className="testimonial-section">
  <h2>What Our Patients Say</h2>

  <div className="testimonial-card">
    <p>"{testimonials[current].review}"</p>

    <h4>{testimonials[current].name}</h4>

    <div>{"⭐".repeat(testimonials[current].rating)}</div>

    <div className="testimonial-buttons">
      <button onClick={prevTestimonial}>❮</button>
      <button onClick={nextTestimonial}>❯</button>
    </div>
  </div>
</section>
</div>

    
  );
};

export default Home;
