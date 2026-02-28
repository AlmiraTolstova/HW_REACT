import { useForm } from "react-hook-form";
function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerUser = (data) => {
    console.log("User data: ", data);
  };
  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Registartion Form</h1>
      <div>
        <label>User Name</label>
        <input
          {...register("username", {
            required: {
              value: true,
              message: "User name is required!",
            },
            minLength: {
              value: 2,
              message: "User Name should consist of more then 2 characters.",
            },
            maxLength: {
              value: 26,
              message:
                "Too many characters in the user name! It should be less then 26",
            },
          })}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: {
              value: true,
              message: "User name is required!",
            },
            minLength: {
              value: 2,
              message: "Last Name should consist of more then 2 characters.",
            },
            maxLength: {
              value: 26,
              message:
                "Too many characters in the last name! It should be less then 26",
            },
          })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default RegistrationForm;
