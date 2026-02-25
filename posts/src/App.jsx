import "./App.css";

import PostForm from "./components/postForm";
import PostList from "./components/postList";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <PostList></PostList>
      <PostForm></PostForm>
    </>
  );
}

export default App;
