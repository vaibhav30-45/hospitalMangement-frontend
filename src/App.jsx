import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./Home/Patient/BookAppointment.jsx";
import Allappointment from "./Home/Doctor/Allappointment";
import AmbulancePage  from "./Home/Services/AmbulancePage.jsx";
import Laboratory from "./Home/Services/Laboratory.jsx";
import Contact from "./Home/Contact/Contact.jsx";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookAppointment />} />
        <Route path="/all-appointments" element={<Allappointment />} />
        <Route path="/ambulancepage" element={<AmbulancePage />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
