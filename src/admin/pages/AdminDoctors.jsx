import { useState } from "react";
import doctorsData from "../../data/doctorsData";
import "../styles/admin.css";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    contact: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();

    const newDoc = {
      id: doctors.length + 1,
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

      {/* Header */}
      <div className="doctor-header">
        <h2>Doctors List</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Doctor
        </button>
      </div>

      {/* Table */}
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
            <tr key={doc.id || index}>
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

      {showModal && (
  <div
    className="modal-overlay"
    onClick={() => setShowModal(false)}
  >
    <div
      className="modal-box"
      onClick={(e) => e.stopPropagation()}
    >
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
          <button type="submit" className="save-btn">
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

export default AdminDoctors;


