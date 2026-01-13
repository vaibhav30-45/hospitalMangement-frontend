import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatusCards";
import AppointmentTable from "../components/UpcomingTable";
import "../styles/admin.css";

const AdminDashboard = () => {
   const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard-stats"
        );
        setStats(res.data);
      } catch (error) {
        console.error("Dashboard stats error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="content">
        <Header />

        <div className="stats">
           {loading ? (
            <p>Loading dashboard...</p>
          ) : (
            <>
              <StatCard title="Doctors" value={stats.allDoctors} />
              <StatCard title="Patients" value={stats.allPatients} />
              <StatCard title="Appointments" value={stats.totalAppointments} />
              <StatCard title="Today Sessions" value={stats.todaySessions} />
            </>
          )}
        </div>

        <h2>Upcoming Appointments</h2>
        <AppointmentTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
