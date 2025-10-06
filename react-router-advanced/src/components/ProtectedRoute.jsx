import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = () => localStorage.getItem("auth") === "true";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
