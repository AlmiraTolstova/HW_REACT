import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const typedUserName = watch("username");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        className={`${styles.input} ${
          errors.username ? styles.error : styles.noError
        }`}
        placeholder="Username"
        {...register("username", { required: "User name is required" })}
      />

      {errors.username && (
        <p className={styles.errorText}>{errors.username.message}</p>
      )}

      {typedUserName && typedUserName !== "" && (
        <input
          className={styles.input}
          placeholder="Additional info"
          type="text"
          {...register("additionalInfo")}
        />
      )}

      <button className={styles.button}>Register</button>
    </form>
  );
}

export default DynamicForm;
