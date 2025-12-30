import StatusCards from "../components/StatusCards";

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
          <button className="primary-btn">Add Doctor</button>
        </div>
      </div>

    </div>
  );
};

export default AdminHome;
