import { useState } from "react";
import doctorsData from "../../data/doctorsData";
import "../styles/admin.css";

const Doctors = () => {
  // 🛠️ Ensure Each Doctor Has a Unique ID  
  const fixedDoctors = doctorsData.map((doc, index) => ({
    id: doc.id || index + 1,  // if id missing → auto assign
    ...doc,
  }));

  const [doctors, setDoctors] = useState(fixedDoctors);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    contact: "",
    image: "",
  });

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add doctor submit
  const handleAddDoctor = (e) => {
    e.preventDefault();

    const newDoc = {
      id: doctors.length + 1, // unique
      ...formData,
    };

    setDoctors([...doctors, newDoc]);
    setShowModal(false);

    setFormData({
      name: "",
      title: "",
      contact: "",
      image: "",
    });
  };

  return (
    <div className="admin-page">

      {/* Header + Add Button */}
      <div className="doctor-header">
        <h2>Doctors List</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Doctor
        </button>
      </div>

      {/* Doctors Table */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact No.</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doc, index) => (
            <tr key={doc.id}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="doctor-table-img"
                />
              </td>

              <td>{doc.name}</td>
              <td>{doc.title}</td>
              <td>{doc.contact}</td>

              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Doctor Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Add New Doctor</h3>

            <form onSubmit={handleAddDoctor}>
              
              <input
                type="text"
                name="name"
                placeholder="Doctor Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="title"
                placeholder="Specialization"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                value={formData.image}
                onChange={handleChange}
                required
              />

              <div className="modal-buttons">
                <button className="save-btn" type="submit">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Doctors;
