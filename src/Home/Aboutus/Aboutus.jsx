import React, { useState } from 'react'
import "./Aboutus.css"

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

const Aboutus = () => {

 
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <>
   
      <div className="about-banner">
        <div className="about-content">
          <h1>About Our Hospital</h1>
          <p>
            We provide world-class healthcare services with experienced doctors
            and modern facilities.
          </p>
        </div>
      </div>

      <div className='para'>
         Our Hospital Management System is designed to streamline hospital operations <br /> and improve patient care through efficient digital solutions. It helps manage patient records, appointments, doctors,<br /> staff, billing, and reports  in a secure and user-friendly manner. By integrating modern technology with healthcare services, the system <br />ensures accuracy, saves time, and enhances communication between departments, ultimately delivering better healthcare experiences for 
         patients <br /> and medical professionals.
      </div>
      <div className="about-section">
        <div className="about-mv">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To improve healthcare delivery by integrating medical expertise with
              modern digital technology.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital healthcare solution for better patient care.
            </p>
          </div>
        </div>

        <div className="about-why">
          <h3>Why Choose Us :-</h3>
          <ul>
            <li>Experienced doctors</li>
            <li>User-friendly system</li>
            <li>Secure patient data</li>
            <li>Time-saving processes</li>
            <li>Reliable support</li>
          </ul>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Patients Say</h2>

        <div className="testimonial-card">
          <p>"{testimonials[current].review}"</p>
          <h4>{testimonials[current].name}</h4>

          <div className="stars">
            {"⭐".repeat(testimonials[current].rating)}
          </div>

          <div className="testimonial-buttons">
            <button onClick={prevTestimonial}>❮</button>
            <button onClick={nextTestimonial}>❯</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus;
