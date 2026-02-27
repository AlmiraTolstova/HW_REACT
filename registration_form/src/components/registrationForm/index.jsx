import axios from "axios";
import { useForm } from "react-hook-form";

const USERS_URL = "";

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const checkUsername = async (username) => {
    if (!username) return true;

    try {
      const { data } = await axios.get(USERS_URL, {
        params: { username },
      });

      return data.length === 0 ? true : "This username is not available";
    } catch {
      return "Username validation error";
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 4, message: "Minimum 4 characters" },
            maxLength: { value: 20, message: "Maximum 20 characters" },
            pattern: {
              value: /^[A-Za-z0-9_]+$/,
              message: "Only letters, numbers and underscore",
            },
            validate: checkUsername,
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </label>
    </form>
  );
}
