import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./HOME/Navbar";
import About from "./HOME/About/About";
import Specialities from "./HOME/Specialities/Specialities";
import Home from "./HOME/Home";
import Footer from "./HOME/Footer";
import Contact from "./HOME/Contact";
import BookAppointment from "./HOME/Patient/BookAppointment";
import Doctors from "./HOME/Docters/Doctors"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="//Doctors" element={<Doctors />} />
         <Route path="/Specialities" element={<Specialities />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
