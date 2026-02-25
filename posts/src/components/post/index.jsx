import styles from "./styles.module.css";

function Post({ logo, title, text, id, funkDeletePost }) {
  return (
    <div className={styles.postContainer}>
      <img className={styles.postImg} src={logo}></img>
      <h2>{title}</h2>
      <p>{text}</p>
      <span>{id}</span>
      <button onClick={() => funkDeletePost(id)}>Удалить</button>
    </div>
  );
}

export default Post;
