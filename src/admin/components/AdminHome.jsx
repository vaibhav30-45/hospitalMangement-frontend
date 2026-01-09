import StatusCards from "../components/StatusCards";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="admin-page">

      <div className="welcome-box">
        <div>
          <h4>Welcome!</h4>
          <p>Manage hospital data from</p>
          <p>Everything you need to manage hospital operations efficiently.</p>
        </div>
      </div>

   
      <StatusCards />

      <div className="dashboard-row">
        <div className="info-card">
          <h3>Upcoming Appointments</h3>
          <p>No appointments yet</p>
        </div>

        <div className="info-card">
          <h3>Quick Actions</h3>
         
      <Link to="/admin/doctors">
     <button className="primary-btn">Add Doctor</button>
      </Link>
         </div>
      </div>

    </div>
  );
};

export default AdminHome;
