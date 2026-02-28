import { useForm } from "react-hook-form";
function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm();
  const registerUser = (data) => {
    console.log("Data submitted: ", data);
  };
  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Registration From</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          User name{" "}
          <input
            {...register("username", { required: "User name is required" })}
          />
        </label>
        {errors.username && <p>{errors.username.message}</p>}
        <label>
          Last name{" "}
          <input
            {...register("lastname", { required: "Last name is required" })}
          />
        </label>
        {errors.lastname && <p>{errors.lastname.message}</p>}
        <label>
          Login{" "}
          <input {...register("login", { required: "Login is required" })} />
        </label>
        {errors.login && <p>{errors.login.message}</p>}
      </div>
      <button>Register</button>
    </form>
  );
}
export default RegistrationForm;
