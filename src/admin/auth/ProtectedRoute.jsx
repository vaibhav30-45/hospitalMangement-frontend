import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // ❌ Not logged in → login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ Logged in → allow dashboard
  return children;
};

export default ProtectedRoute;
