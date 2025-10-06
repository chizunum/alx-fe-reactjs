import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Learning React Router" },
  { id: 2, title: "Understanding Protected Routes" },
];

export default function Blog() {
  return (
    <div className="p-5">
      <h2>📝 Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
