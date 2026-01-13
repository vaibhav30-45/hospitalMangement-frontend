import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  /* Fetch Doctors */
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="admin-page">
      <div className="doctor-header">
        <h2>Our Doctors</h2>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doc, index) => (
            <tr key={doc._id}>
              <td>{index + 1}</td>
              <td>
                <img src={`http://localhost:5000${doc.image}`} alt={doc.name} className="doctor-table-img" />
              </td>
              <td>{doc.name}</td>
              <td>{doc.title}</td>
              <td>{doc.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;