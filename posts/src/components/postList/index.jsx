import styles from "./styles.module.css";
import POSTS_URL from "../api/api";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post";
import personLogo from "../../assets/person.svg";

function PostList() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios
      .get(POSTS_URL)
      .then(function (response) {
        // handle success
        console.log(response);
        setPostsList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {postsList?.map((item, index) => {
        return (
          <Post
            key={index}
            logo={item.photo}
            title={item.title}
            text={item.text}
            id={item.id}
          ></Post>
        );
      })}
    </div>
  );
}

export default PostList;
