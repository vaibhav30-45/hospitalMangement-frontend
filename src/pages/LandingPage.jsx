import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaAmbulance, FaStethoscope, FaHeartbeat, FaPills, FaHospitalUser } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-700">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaHeartbeat className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-blue-900">MediCare</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#doctors" className="hover:text-blue-600 transition">Doctors</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/login')} 
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-semibold"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/register')} // Assuming you have a register route
              className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition font-semibold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
              👋 24/7 Emergency Service Available
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Health is Our <br />
              <span className="text-blue-600">Top Priority</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Experience world-class healthcare with our expert doctors and state-of-the-art facilities. Manage appointments and health records with ease.
            </p>
            <div className="flex gap-4 pt-4">
              <button onClick={() => navigate('/login')} className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-xl hover:scale-105 transition transform">
                Find a Doctor
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-300 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-900">50+</h3>
                <p className="text-sm text-gray-500">Specialist Doctors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900">10k+</h3>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900">24/7</h3>
                <p className="text-sm text-gray-500">Urgent Care</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1000&auto=format&fit=crop" 
              alt="Doctor Team" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </header>

      {/* --- INFO CARDS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 grid md:grid-cols-3 gap-6">
        <InfoCard 
          icon={<FaAmbulance className="text-4xl mb-4"/>}
          title="Emergency Cases"
          desc="Please feel free to contact our friendly reception staff with any general or medical enquiry."
          bg="bg-blue-600"
          text="text-white"
        />
        <InfoCard 
          icon={<FaUserMd className="text-4xl mb-4"/>}
          title="Doctor Schedule"
          desc="View our doctor's timetable to find the slot that best fits your busy schedule."
          bg="bg-blue-800"
          text="text-white"
        />
        <InfoCard 
          icon={<FaHospitalUser className="text-4xl mb-4"/>}
          title="Opening Hours"
          desc="Mon - Fri: 8:00am - 10:00pm"
          sub="Sat - Sun: 10:00am - 8:00pm"
          bg="bg-blue-900"
          text="text-white"
        />
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Medical Services</h2>
          <p className="text-gray-500 mt-3">Comprehensive care for you and your family</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <ServiceCard icon={<FaHeartbeat />} title="Cardiology" />
          <ServiceCard icon={<FaStethoscope />} title="General Checkup" />
          <ServiceCard icon={<FaPills />} title="Pharmacy" />
          <ServiceCard icon={<FaUserMd />} title="Neurology" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaHeartbeat className="text-blue-500 text-2xl" />
              <span className="text-xl font-bold">MediCare</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading the way in medical excellence, trusted care, and modern hospital management.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">123 Hospital Drive, NY</p>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-800 pt-8">
          © 2025 MediCare HMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// --- SUB COMPONENTS FOR CLEAN CODE ---

const InfoCard = ({ icon, title, desc, sub, bg, text }) => (
  <div className={`${bg} ${text} p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300`}>
    {icon}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm opacity-90 mb-2">{desc}</p>
    {sub && <p className="text-sm font-bold">{sub}</p>}
  </div>
);

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition text-center group cursor-pointer">
    <div className="text-4xl text-blue-500 mb-4 group-hover:scale-110 transition transform inline-block">
      {icon}
    </div>
    <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition">{title}</h3>
    <p className="text-sm text-gray-400 mt-2">Expert care provided by top specialists.</p>
  </div>
);

export default LandingPage;