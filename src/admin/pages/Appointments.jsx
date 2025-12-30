import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatusCards";
import AppointmentTable from "../components/UpcomingTable";
import "../styles/admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="content">
        <Header />

        <div className="stats">
          <StatCard title="Doctors" value="12" />
          <StatCard title="Patients" value="240" />
          <StatCard title="Appointments" value="90" />
          <StatCard title="Today Sessions" value="8" />
        </div>

        <h2>Upcoming Appointments</h2>
        <AppointmentTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
