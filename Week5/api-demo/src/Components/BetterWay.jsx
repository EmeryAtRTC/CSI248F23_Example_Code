import { useState, useEffect } from "react";
import { fetchPosts } from "../Data/PostRepository";
function BetterWay() {
  //track posts
  const [posts, setPosts] = useState([]);
  //tracking loading
  const [loading, setLoading] = useState(true);
  //tracking if there has been an error
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>Better Way</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BetterWay;
