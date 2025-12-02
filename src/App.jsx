import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./Home/Patient/BookAppointment.jsx";
import Allappointment from "./Home/Doctor/Allappointment";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookAppointment />} />
        <Route path="/all-appointments" element={<Allappointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
