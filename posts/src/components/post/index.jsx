import styles from "./styles.module.css";

function Post({ logo, title, text, id }) {
  return (
    <div>
      <img src={logo}></img>
      <h2>{title}</h2>
      <p>{text}</p>
      <span>{id}</span>
      <button>Удалить</button>
    </div>
  );
}

export default Post;
