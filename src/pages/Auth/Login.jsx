import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserInjured, FaUserMd, FaUserShield, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient'); // Default role

  const handleLogin = (e) => {
    e.preventDefault();
    // logic for login will go here later (API Call)
    
    // For now, just redirect based on role to show the flow works
    if (role === 'patient') navigate('/patient/dashboard');
    if (role === 'doctor') navigate('/doctor/dashboard');
    if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden">
        
        {/* --- LEFT SIDE: VISUALS --- */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between text-white relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full w-96 h-96 -top-20 -left-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
            <p className="text-blue-100">
              Access your dashboard to manage appointments, check records, and stay connected.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-md">
              <div className="p-2 bg-white rounded-full text-blue-600">
                <FaUserInjured />
              </div>
              <div>
                <p className="font-bold">Patients</p>
                <p className="text-xs text-blue-100">Track your health history</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-md">
              <div className="p-2 bg-white rounded-full text-blue-600">
                <FaUserMd />
              </div>
              <div>
                <p className="font-bold">Doctors</p>
                <p className="text-xs text-blue-100">Manage your schedule</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign In to MediCare</h3>
            <p className="text-gray-500 text-sm">Please select your role to continue</p>
          </div>

          {/* Role Selector (The Unique Part) */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
            {['patient', 'doctor', 'admin'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize
                  ${role === r ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {r === 'patient' && <FaUserInjured />}
                {r === 'doctor' && <FaUserMd />}
                {r === 'admin' && <FaUserShield />}
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform active:scale-95 shadow-lg"
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? 
            <a href="/register" className="text-blue-600 font-semibold hover:underline ml-1">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;