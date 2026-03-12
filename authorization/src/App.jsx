import "./App.css";
import LoginForm from "./components/loginForm";
import UserProfile from "./components/userProfile";
import { connect } from "react-redux";

function App({ isAuthenticated }) {
  return (
    <div>
      {isAuthenticated === true ? (
        <UserProfile></UserProfile>
      ) : (
        <LoginForm></LoginForm>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
