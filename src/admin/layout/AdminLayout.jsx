import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
