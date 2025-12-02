import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarPlus, FaHistory, FaUserCircle, FaSignOutAlt, FaNotesMedical, FaCreditCard } from 'react-icons/fa';
import { BiCalendarCheck } from 'react-icons/bi';

// --- Dashboard Layout Sub-Components ---

const Sidebar = ({ navigate }) => (
  <div className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col h-full shadow-md">
    <div className="text-xl font-bold text-blue-800 mb-10">Patient Portal</div>
    
    <nav className="flex-grow space-y-2">
      <SidebarItem icon={FaUserCircle} label="Dashboard" active={true} />
      <SidebarItem icon={FaCalendarPlus} label="Book Appointment" />
      <SidebarItem icon={FaHistory} label="My History" />
      <SidebarItem icon={FaCreditCard} label="Billing & Payments" />
      <SidebarItem icon={FaNotesMedical} label="Records" />
    </nav>

    <button 
      onClick={() => navigate('/')} 
      className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-lg transition"
    >
      <FaSignOutAlt />
      <span className="font-medium">Logout</span>
    </button>
  </div>
);

const SidebarItem = ({ icon: Icon, label, active }) => (
  <a 
    href="#"
    className={`flex items-center gap-3 p-3 rounded-lg transition ${
      active 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`}
  >
    <Icon />
    <span className="font-medium">{label}</span>
  </a>
);

// --- Main Dashboard Component ---

const PatientDashboard = () => {
  const navigate = useNavigate(); // This line assumes you import useNavigate from 'react-router-dom'
  
  // Placeholder data
  const upcomingAppointment = {
    date: 'Dec 15, 2025',
    time: '10:30 AM',
    doctor: 'Dr. Evelyn Reed (Cardiology)',
  };
  
  const healthStats = [
    { title: 'Upcoming Appt.', value: 1, icon: BiCalendarCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Total Visits', value: 14, icon: FaHistory, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Unpaid Bills', value: '$0.00', icon: FaCreditCard, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar navigate={navigate} /> {/* Left Sidebar */}

      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-5 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome back, Jessica</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 text-sm">Patient ID: 90210</span>
            <FaUserCircle className="text-blue-600 text-3xl" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-8 space-y-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          
          {/* Upcoming Appointment and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Next Appointment</h2>
              
              <div className="flex justify-between items-start border-b pb-4 mb-4">
                <div className="space-y-1">
                  <p className="text-3xl font-extrabold text-blue-600">{upcomingAppointment.date}</p>
                  <p className="text-lg text-gray-600">{upcomingAppointment.time}</p>
                </div>
                <button className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 transition">
                  Confirm Details
                </button>
              </div>

              <p className="text-gray-700">With: <span className="font-semibold">{upcomingAppointment.doctor}</span></p>
              <p className="text-gray-500 text-sm mt-2">Location: Main Hospital Building, Floor 3, Room 305</p>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-blue-600 p-6 rounded-xl shadow-lg flex flex-col justify-between text-white">
              <h2 className="text-xl font-bold mb-4">Need Care Now?</h2>
              <p className="mb-6 opacity-90">Quickly book your next visit or check your past records.</p>
              <button 
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
                onClick={() => alert('Redirecting to Booking Page...')}
              >
                <FaCalendarPlus className="inline-block mr-2" /> Book New Appointment
              </button>
            </div>
          </div>
          
          {/* Recent History Table (Placeholder) */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
             <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Visit History</h2>
             {/* Simple Table structure would go here */}
             <div className="text-gray-500 p-4 border border-dashed rounded-lg">
                Table component for "My History" will be built here later.
             </div>
          </div>

        </main>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon: Icon, color, bg }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border border-gray-100 transform hover:scale-[1.02] transition duration-200">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
    </div>
    <div className={`${bg} ${color} p-3 rounded-full text-xl`}>
      <Icon />
    </div>
  </div>
);

export default PatientDashboard;