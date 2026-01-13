import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./HOME/Navbar.jsx";
import About from "./HOME/About/About";
import Specialities from "./HOME/Specialities/Specialities.jsx";
import Home from "./HOME/Home.jsx";
import Footer from "./HOME/Footer";
import Contact from "./HOME/Contact";
import BookAppointment from "./HOME/Patient/BookAppointment.jsx";
import Doctors from "./HOME/Docters/Doctors";
import Blood from "./HOME/BloodModule/Blood.jsx";
import DonorRegistration from "./HOME/BloodModule/Donate.jsx";
import Blogs from "./BlogPages/Blogs.jsx";
import BlogDetails from "./BlogPages/BlogDetails.jsx";
import Laboratory from "./HOME/Services/Laboratory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Specialities" element={<Specialities />} />
        <Route path="/book-appointment/:doctorId?" element={<BookAppointment />} />
        <Route path="/Blood" element={<Blood />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/Laboratory" element={<Laboratory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
