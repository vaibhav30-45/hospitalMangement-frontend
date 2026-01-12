import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editDoctorId, setEditDoctorId] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setEditDoctorId(null);
    setFormData({
      name: "",
      title: "",
      contact: "",
      image: "",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    contact: "",
    image: "",
  });

  /* Fetch Doctors */
  const fetchDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/doctors");
      setDoctors(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  /* Input Change */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Add Doctor */
  const handleAddDoctor = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken"); // get admin token
      await axios.post("http://localhost:5000/api/doctors/add", formData,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      fetchDoctors();
      closeModal();
    } catch (error) {
      alert("Failed to add doctor");
    }
  };

  /* Update Doctor */
  const handleUpdateDoctor = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken"); // get admin token
      await axios.put(
        `http://localhost:5000/api/doctors/update/${editDoctorId}`,
        formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchDoctors();
      closeModal();
    } catch (error) {
      alert("Failed to update doctor");
    }
  };

  /* Delete Doctor */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this doctor?")) return;
    try {
      const token = localStorage.getItem("adminToken"); // get admin token
      await axios.delete(`http://localhost:5000/api/doctors/delete/${id}`,  {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      fetchDoctors();
    } catch (error) {
      alert("Delete failed");
    }
  };

  /* Edit Doctor */
  const handleEdit = (doctor) => {
    setEditDoctorId(doctor._id);
    setFormData({
      name: doctor.name,
      title: doctor.title,
      contact: doctor.contact,
      image: doctor.image,
    });
    setShowModal(true);
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
            <tr key={doc._id}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={`http://localhost:5000${doc.image}`}
                  alt={doc.name}
                  className="doctor-table-img"
                />
              </td>

              <td>{doc.name}</td>
              <td>{doc.title}</td>
              <td>{doc.contact}</td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(doc)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(doc._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal-overlay"
         onClick={closeModal}

        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{editDoctorId ? "Edit Doctor" : "Add New Doctor"}</h3>

            <form onSubmit={editDoctorId ? handleUpdateDoctor : handleAddDoctor}>
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
                 onClick={closeModal}

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