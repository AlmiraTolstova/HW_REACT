import Header from "../../components/header";
import styles from "./styles.module.css";
import PostForm from "../../components/postForm";
import PostList from "../../components/postList";
import axios from "axios";
import POSTS_URL from "../../components/api/api";
import { useState, useEffect } from "react";

function HomePage() {
  const headerLinks = [
    { label: "Главная", path: "#" },
    { label: "Музыка", path: "#" },
    { label: "Сообщества", path: "#" },
    { label: "Друзья", path: "#" },
  ];
  const [postsList, setPostsList] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  function getPosts() {
    axios
      .get(POSTS_URL)
      .then(function (response) {
        // handle success
        console.log(response);
        setPostsList(response.data);
        setReloadData(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setReloadData(false);
      })
      .finally(function () {
        // always executed
        setReloadData(false);
      });
  }
  async function createPost(data) {
    try {
      const response = await axios.post(POSTS_URL, data);
      setReloadData(true);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePost(id) {
    try {
      const response = await axios.delete(POSTS_URL + "/" + id);
      setReloadData(true);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [reloadData]);
  return (
    <div>
      <Header links={headerLinks}></Header>
      <PostList postsList={postsList} funkDeletePost={deletePost}></PostList>
      <PostForm createPost={createPost}></PostForm>
    </div>
  );
}
export default HomePage;
