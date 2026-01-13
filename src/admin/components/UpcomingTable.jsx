import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/admin.css";

const UpcomingTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/upcoming-appointments"
        );
        setAppointments(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="table-box">
      <h3>Your Upcoming Booking</h3>

      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Appoint. No</th>
              <th>Session Title</th>
              <th>Doctor</th>
              <th>Scheduled Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="4">No upcoming appointments</td>
              </tr>
            ) : (
              appointments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.department}</td>
                  <td>{item.doctor}</td>
                  <td>
                    {item.date} {item.time}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UpcomingTable;
