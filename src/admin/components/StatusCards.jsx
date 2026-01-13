import "../styles/admin.css";
import { useEffect, useState } from "react";
import axios from "axios";

const StatusCards = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard-stats"
        );
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <p>Loading...</p>;
  const data = [
    { count: stats.allDoctors, title: "All Doctors" },
    { count: stats.allPatients, title: "All Patients" },
    { count: stats.newBooking, title: "New Booking" },
    { count: stats.todaySessions, title: "Today Sessions" },
    { count: stats.totalAppointments, title: "Total Appointments" },
    { count: stats.pendingAppointments, title: "Pending Appointments" },

  ];

  return (
    <div className="status-grid">
      {data.map((item) => (
        <div className="status-card" key={item.title}>
          <h3>{item.count}</h3>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;
