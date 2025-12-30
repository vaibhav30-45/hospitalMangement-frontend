import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./Home/Patient/BookAppointment";
import Allappointment from "./Home/Doctor/Allappointment";
import Laboratory from "./Home/Services/Laboratory";
import Contact from "./Home/Contact/Contact";
import Aboutus from "./Home/Aboutus/Aboutus";
import Ourdoctor from "./Home/Doctor/Ourdoctor";

import AdminLayout from "./admin/layout/AdminLayout";
import AdminHome from "./admin/components/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<BookAppointment />} />
        <Route path="/all-appointments" element={<Allappointment />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourdoctor" element={<Ourdoctor />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          {/* future */}
          {/* <Route path="doctors" element={<AdminDoctors />} /> */}
          {/* <Route path="appointments" element={<AdminAppointments />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
