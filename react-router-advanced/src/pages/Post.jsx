import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div className="p-5">
      <h2>📄 Blog Post #{postId}</h2>
      <p>This is the content for post {postId}.</p>
    </div>
  );
}
