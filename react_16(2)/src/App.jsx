import PostsProvider from "./components/provider/myProvider";
import PostsList from "./components/postList";

function App() {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
}

export default App;
