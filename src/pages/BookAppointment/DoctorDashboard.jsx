import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaCalendarDay, FaClipboardList, FaUsers, FaSignOutAlt, FaClock } from 'react-icons/fa';
import { MdOutlineSchedule } from 'react-icons/md';

// --- Dashboard Layout Sub-Components ---

const Sidebar = ({ navigate }) => (
  <div className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col h-full shadow-md">
    <div className="text-xl font-bold text-purple-800 mb-10">Doctor Portal</div>
    
    <nav className="flex-grow space-y-2">
      <SidebarItem icon={FaUserMd} label="Dashboard" active={true} />
      <SidebarItem icon={FaCalendarDay} label="Today's Patients" />
      <SidebarItem icon={MdOutlineSchedule} label="My Schedule" />
      <SidebarItem icon={FaClipboardList} label="Patient Records" />
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
        ? 'bg-purple-600 text-white shadow-lg' 
        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
    }`}
  >
    <Icon />
    <span className="font-medium">{label}</span>
  </a>
);

// Reusable Stat Card Component (adapted for doctor)
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

// --- Main Dashboard Component ---

const DoctorDashboard = () => {
  const navigate = useNavigate();
  
  // Placeholder data
  const stats = [
    { title: "Appointments Today", value: 8, icon: FaCalendarDay, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: "Total Patients", value: 1245, icon: FaUsers, color: 'text-green-600', bg: 'bg-green-50' },
    { title: "Next Appointment", value: '11:00 AM', icon: FaClock, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];
  
  const todayAppointments = [
    { time: '10:00 AM', name: 'John Doe', reason: 'Routine Checkup', status: 'Waiting', id: 'P001' },
    { time: '10:30 AM', name: 'Alice Smith', reason: 'Flu Symptoms', status: 'In Progress', id: 'P002' },
    { time: '11:00 AM', name: 'Robert Brown', reason: 'Follow-up Visit', status: 'Scheduled', id: 'P003' },
    { time: '11:30 AM', name: 'Sarah Lee', reason: 'Annual Physical', status: 'Scheduled', id: 'P004' },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Waiting': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar navigate={navigate} /> {/* Left Sidebar */}

      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-5 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Hello, Dr. Anya Sharma</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 text-sm">Cardiologist</span>
            <FaUserMd className="text-purple-600 text-3xl" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-8 space-y-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          
          {/* Today's Appointments Table */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Today's Appointments</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition">
                    View Full Schedule
                </button>
             </div>
             
             <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {todayAppointments.map((appt) => (
                            <tr key={appt.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appt.time}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appt.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appt.reason}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(appt.status)}`}>
                                        {appt.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-purple-600 hover:text-purple-900 mr-3">View Record</button>
                                    <button className="text-blue-600 hover:text-blue-900">Start Consultation</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;