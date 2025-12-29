import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Home/Navbar";
import About from "./HOME/About/About";
import Specialities from "./Home/Specialities/Specialities";
import Home from "./Home/Home";
import Footer from "./HOME/Footer";
import Contact from "./HOME/Contact";
import BookAppointment from "./Home/patient/BookAppointment";
import Doctors from "./HOME/Docters/Doctors";
import Blood from "./Home/BloodModule/Blood";
import DonorRegistration from "./Home/BloodModule/Donate";
import Blogs from "./BlogPages/Blogs";
import BlogDetails from "./BlogPages/BlogDetails";
import Laboratory from "./Home/Services/Laboratory";

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
        <Route path="/book-appointment" element={<BookAppointment />} />
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
