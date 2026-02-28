import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const RegistrationForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>

      <input placeholder="Логин" {...register("login", { required: true })} />
      {errors.login && <span>Логин обязателен</span>}

      <input
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+\.\S+$/,
        })}
      />
      {errors.email && <span>Введите корректный email</span>}

      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      {errors.password && <span>Пароль минимум 6 символов</span>}

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
