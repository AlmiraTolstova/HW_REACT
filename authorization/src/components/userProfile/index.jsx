import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { login, logout } from "../../redux/actions";

function UserProfile({ user, logout }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Username {user}</p>

        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (data) => dispatch(logout(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
