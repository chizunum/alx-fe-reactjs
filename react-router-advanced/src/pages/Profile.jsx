import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth"); // clear authentication
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="p-5">
      <h1>👤 Profile</h1>

      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>

        {/* 🚪 Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      <hr className="my-3" />
      <Outlet /> {/* 👈 Nested routes render here */}
    </div>
  );
}
