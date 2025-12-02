import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStethoscope, FaCalendarAlt, FaClock, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const departments = [
  'Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'Dermatology', 'General Medicine'
];
const availableDoctors = {
  Cardiology: ['Dr. Anya Sharma', 'Dr. Ben Carter'],
  Neurology: ['Dr. Clara Davies', 'Dr. Ethan Miller'],
  Pediatrics: ['Dr. Noah Wilson', 'Dr. Olivia Brown'],
};
const availableSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: new Date().toISOString().slice(0, 10),
    time: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBookingConfirm = (e) => {
    e.preventDefault();
    // API call to book appointment goes here
    alert(`Appointment confirmed with ${formData.doctor} on ${formData.date} at ${formData.time}.`);
    navigate('/patient/dashboard');
  };

  const isStepValid = () => {
    if (step === 1) return formData.department && formData.doctor;
    if (step === 2) return formData.date && formData.time;
    return true;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">1. Select Department & Doctor</h3>
            {/* Department Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="">Choose Department</option>
                {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
              </select>
            </div>

            {/* Doctor Selection */}
            {formData.department && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                <select
                  value={formData.doctor}
                  onChange={(e) => handleInputChange('doctor', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Choose Doctor</option>
                  {(availableDoctors[formData.department] || []).map(doc => <option key={doc} value={doc}>{doc}</option>)}
                  {(!availableDoctors[formData.department] || availableDoctors[formData.department].length === 0) && (
                    <option disabled>No doctors available</option>
                  )}
                </select>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">2. Select Date & Time</h3>
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
              <div className="grid grid-cols-3 gap-3">
                {availableSlots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleInputChange('time', slot)}
                    className={`p-3 rounded-lg border transition ${
                      formData.time === slot
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 text-center p-8 bg-blue-50 rounded-xl">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">3. Confirm Details</h3>
            
            <div className="text-left space-y-3 bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-lg text-blue-600">Review Appointment</p>
              <p>Doctor: <span className="font-bold text-gray-800">{formData.doctor}</span></p>
              <p>Department: <span className="font-bold text-gray-800">{formData.department}</span></p>
              <p>Date: <span className="font-bold text-gray-800">{formData.date}</span></p>
              <p>Time: <span className="font-bold text-gray-800">{formData.time}</span></p>
            </div>

            <p className="text-sm text-gray-500">
              By confirming, you agree to our terms and conditions. A confirmation email will be sent.
            </p>
            <button
              type="submit"
              onClick={handleBookingConfirm}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <FaCheckCircle /> Confirm & Book
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-8">
        <div className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold text-blue-800">New Appointment Booking</h1>
          <p className="text-gray-500 mt-1">Book your session in 3 easy steps.</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center text-sm font-semibold">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex flex-col items-center ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  step === s ? 'bg-blue-600 text-white border-blue-600' : 
                  step > s ? 'bg-blue-100 text-blue-600 border-blue-600' : 
                  'bg-white border-gray-400'
                }`}
              >
                {s === 1 && <FaStethoscope />}
                {s === 2 && <FaCalendarAlt />}
                {s === 3 && <FaClock />}
              </div>
              <p className="mt-2 hidden sm:block">Step {s}</p>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <form className="space-y-6">
          {renderStepContent()}
        </form>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              step === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
            }`}
          >
            Back
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                isStepValid() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-300 text-white cursor-not-allowed'
              }`}
            >
              Next <FaChevronRight className="w-3 h-3" />
            </button>
          ) : (
            <button 
                type="button" 
                onClick={() => navigate('/patient/dashboard')}
                className="px-6 py-2 rounded-lg font-semibold bg-gray-500 hover:bg-gray-600 text-white transition"
            >
                Back to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;