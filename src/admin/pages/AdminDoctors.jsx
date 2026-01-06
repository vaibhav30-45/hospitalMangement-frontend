import { useState } from "react";
import "./admind.css";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Apeksha Rai",
      specialty: "Orthopaedic Surgeon",
      experience: "8 Years",
    },
    {
      id: 2,
      name: "Dr. Shivansh Agrawal",
      specialty: "GI & Bariatric Surgeon",
      experience: "10 Years",
    },
    {
      id: 3,
      name: "Dr. Aditya Jain",
      specialty: "Neurosurgeon",
      experience: "6 Years",
    },
  ]);

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialty: "",
    experience: "",
  });

  // ADD DOCTOR (frontend only)
  const handleAddDoctor = () => {
    if (!newDoctor.name || !newDoctor.specialty) return;

    setDoctors([
      ...doctors,
      { id: Date.now(), ...newDoctor },
    ]);

    setNewDoctor({ name: "", specialty: "", experience: "" });
  };


  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  return (
    <div className="admin-page">
      <h2>Doctors Management</h2>

      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Add Doctor</h3>

        <input
          type="text"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, specialty: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Experience"
          value={newDoctor.experience}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, experience: e.target.value })
          }
        />

        <button onClick={handleAddDoctor}>Add Doctor</button>
      </div>

    
      <div className="card">
        <h3>Doctors List</h3>

        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc, index) => (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.specialty}</td>
                <td>{doc.experience}</td>
                <td>
                  <button
                    className="danger-btn"
                    onClick={() => handleDelete(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDoctors;
