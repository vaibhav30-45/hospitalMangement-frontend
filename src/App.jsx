import { BrowserRouter, Routes, Route } from "react-router-dom";

// detagenix / admin imports
import Allappointment from "./admin/pages/Allappointment";
import Ourdoctor from "./Home/Doctor/Ourdoctor";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminHome from "./admin/components/AdminHome";
import AdminDoctors from "./admin/pages/AdminDoctors";
import BlogManager from "./admin/pages/BlogManager";
import AddBlog from "./admin/pages/AddBlog";
import EditBlog from "./admin/pages/EditBlog";
import AdminLogin from "./admin/components/AdminLogin";
import AllBloodRequests from "./admin/pages/AllBloodRequests";
import AllLabTests from "./admin/pages/AllLabTests";

// hospital imports
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

      {/* Hospital frontend routes */}
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


      {/* Detagenix / Admin routes */}
      <Routes>
        <Route path="/all-appointments" element={<Allappointment />} />
        <Route path="/ourdoctor" element={<Ourdoctor />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="allappointments" element={<Allappointment />} />
          <Route path="blogs" element={<BlogManager />} />
          <Route path="blogs/add" element={<AddBlog />} />
          <Route path="blogs/edit/:id" element={<EditBlog />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/blood-requests" element={<AllBloodRequests />} />
          <Route path="/admin/lab-tests" element={<AllLabTests />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
