import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import PatientDashboard from './pages/patient/PatientDashboard'; 
import DoctorDashboard from './pages/BookAppointment/DoctorDashboard';
import Register from './pages/Auth/Register';
import Booking from './pages/patient/BookAppointment';

// Placeholder Components (Register, Doctor, Admin)
// const Register = () => <div className="text-center mt-20 text-2xl">Register Page</div>;
// const DoctorDash = () => <div className="text-purple-600 text-center mt-20 text-2xl">Doctor Dashboard</div>;
const AdminDash = () => <div className="text-red-600 text-center mt-20 text-2xl">Admin Dashboard</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/book" element={<Booking />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> 
        <Route path="/admin/dashboard" element={<AdminDash />} /> 

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;