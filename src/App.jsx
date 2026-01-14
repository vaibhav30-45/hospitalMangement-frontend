import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <BrowserRouter>
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
          </BrowserRouter>
  );
}

export default App;
