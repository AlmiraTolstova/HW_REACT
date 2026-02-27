import styles from "./styles.module.css";
import POSTS_URL from "../api/api";
import { useState, useEffect } from "react";

import Post from "../post";

function PostList({ postsList, funkDeletePost }) {
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
            funkDeletePost={funkDeletePost}
          ></Post>
        );
      })}
    </div>
  );
}

export default PostList;
