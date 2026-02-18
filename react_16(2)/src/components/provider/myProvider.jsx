import { useEffect, useState } from "react";
import MyContext from "../../context/myContext";
const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

function MyProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(POSTS_API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <MyContext.Provider value={{ posts, loading, error }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
