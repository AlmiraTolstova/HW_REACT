import axios from "axios";
import { useForm } from "react-hook-form";

const USERS_URL = "https://699eb2fe78dda56d396b07cc.mockapi.io/users";

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: "onChange" | "onBlur",
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
    <form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
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

      <label>
        Email
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        First name
        <input
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            pattern: {
              value: /^[A-Za-zА-Яа-я]+$/,
              message: "Only letters allowed",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>

      <label>
        Last name
        <input
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            pattern: {
              value: /^[A-Za-zА-Яа-я]+$/,
              message: "Only letters allowed",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>

      <label>
        Password
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
            validate: (value) =>
              /[A-Z]/.test(value) && /\d/.test(value)
                ? true
                : "Must contain uppercase letter and number",
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <label>
        Confirm password
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirmation is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label>

      <label>
        Age
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Minimum age is 18" },
            max: { value: 100, message: "Maximum age is 100" },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </label>

      <label>
        Phone
        <input
          placeholder="+65XXXXXX XX-XX"
          {...register("phone", {
            required: "Phone is required",
            validate: (value) => {
              const digits = value.replace(/\D/g, "");
              return digits.length === 12
                ? true
                : "Must contain 10 digits after +65";
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </label>

      <label>
        <input
          type="checkbox"
          {...register("agreement", {
            required: "You must accept the terms",
          })}
        />
        I agree with the rules
        {errors.agreement && <p>{errors.agreement.message}</p>}
      </label>

      <button type="submit" disabled={!isValid || isValidating}>
        {isValidating ? "Checking..." : "Register"}
      </button>
    </form>
  );
}
