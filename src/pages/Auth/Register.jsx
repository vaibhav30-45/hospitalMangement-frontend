import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUserInjured, FaUserMd, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient'); // Default role: Patient
  
  const handleRegister = (e) => {
    e.preventDefault();
    // In a real application, this is where the API call to /register would happen.
    
    // For now, redirect to login after successful (simulated) registration
    alert(`Successfully registered as a ${role}. Redirecting to Login.`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden">
        
        {/* --- LEFT SIDE: FORM --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h3>
            <p className="text-gray-500 text-sm">Join our medical system in minutes</p>
          </div>

          {/* Role Selector */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
            {['patient', 'doctor'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize
                  ${role === r ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {r === 'patient' ? <FaUserInjured /> : <FaUserMd />}
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Jane Doe"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>


            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700 transition transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <FaUserPlus /> Register as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account? 
            <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Log in</a>
          </div>
        </div>

        {/* --- RIGHT SIDE: VISUALS --- */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between text-white relative order-1 md:order-2">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full w-96 h-96 -top-20 -right-20"></div>
          
          <div className="relative z-10 text-center space-y-4 pt-12">
            <h2 className="text-4xl font-bold">Quick Registration</h2>
            <p className="text-blue-100">
              Sign up today to manage your health records, appointments, or doctor schedules easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;