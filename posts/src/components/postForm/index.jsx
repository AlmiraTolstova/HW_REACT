import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import PersonLogo from "../../assets/person.svg";

const POSTS_URL = "https://699eb2fe78dda56d396b07cc.mockapi.io/posts";

function PostForm({ createPost }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await createPost(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Написать пост</h1>

      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.avatar}>
          {" "}
          <img src={PersonLogo}></img>
        </div>

        <div className={styles.fields}>
          <label>
            <span>Заголовок</span>
            <input type="text" placeholder="Заголовок" {...register("title")} />
          </label>

          <label>
            <span>Текст поста</span>
            <textarea placeholder="Введите текст..." {...register("text")} />
          </label>

          <button type="submit">Публикация</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
