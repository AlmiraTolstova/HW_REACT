import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import RegistrationForm from "../registrationForm";
import UserProfile from "../userProfile";
import styles from "./styles.module.css";

const MainComponent = () => {
  const { isRegistered } = useContext(UserContext);

  return <>{isRegistered ? <UserProfile /> : <RegistrationForm />}</>;
};

export default MainComponent;
