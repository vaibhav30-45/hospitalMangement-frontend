import Sidebar from "../components/Sidebar";
import "../styles/admin.css";

const AdminDoctors = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="content">
        <h2>Manage Doctors</h2>
        <button className="add-btn">+ Add Doctor</button>

        <table className="table">
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>Dr. Sharma</td>
            <td>Cardiologist</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AdminDoctors;
