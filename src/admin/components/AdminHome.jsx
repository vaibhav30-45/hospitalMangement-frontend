import { useEffect, useState } from "react";
import axios from "axios";
import StatusCards from "../components/StatusCards";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/upcoming-appointments"
        );
        setUpcomingCount(res.data.length);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <div className="admin-page">
      {/* Welcome */}
      <div className="welcome-box">
        <div>
          <h4>Welcome!</h4>
          <p>Manage hospital data from one place</p>
          <p>Everything you need to manage hospital operations efficiently.</p>
        </div>
      </div>

      {/* Dynamic Status Cards */}
      <StatusCards />

      <div className="dashboard-row">
        {/* Upcoming Appointments */}
        <div className="info-card">
          <h3>Upcoming Appointments</h3>
          {loading ? (
            <p>Loading...</p>
          ) : upcomingCount > 0 ? (
            <p>{upcomingCount} appointments scheduled</p>
          ) : (
            <p>No appointments yet</p>
          )}
        </div>

        {/* Quick Actions */}
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
