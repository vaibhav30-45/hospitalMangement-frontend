import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaNewspaper,
  FaFlask,
  FaTint,
  FaCog,
  FaUserShield,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-user">
        <FaUserShield />
        <span>Admin User</span>
      </div>

      <p className="admin-email">admin@hospital.com</p>

      <button className="logout-btn">Log out</button>

      <ul>
        <li>
          <Link to="/admin" className="menu-item">
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/admin/doctors" className="menu-item">
            <FaUserMd /> Doctors
          </Link>
        </li>

        <li>
          <Link to="/admin/allappointments" className="menu-item">
            <MdEventAvailable /> Appointments
          </Link>
        </li>

      <li>
      <Link to="/admin/blogs" className="menu-item">
      <FaNewspaper /> Articles
     </Link>
    </li>

        <li>
          <Link to="/admin/lab-tests" className="menu-item">
            <FaFlask /> Laboratory
          </Link>
        </li>

        <li>
          <Link to="/admin/blood-requests" className="menu-item">
            <FaTint /> Bloodlink
          </Link>
        </li>

        <li>
          <Link to="/admin/settings" className="menu-item">
            <FaCog /> Settings
          </Link>
        </li>
      

      </ul>

    </div>
  );
};

export default Sidebar;


