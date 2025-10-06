import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-5">
      <h1>🏠 Home Page</h1>
      <nav className="space-x-4">
        <Link to="/blog">Blog</Link>
        <Link to="/profile/details">Profile</Link>
      </nav>
    </div>
  );
}
