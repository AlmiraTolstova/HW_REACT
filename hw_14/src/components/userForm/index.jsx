import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions/userActions";

function UserForm({ setUserInfoAction }) {
  const [username, setUsername] = useState("");
  const [userStatus, setUserStatus] = useState("");
  function formSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !userStatus.trim()) {
      alert("Please fill all fields");
      return;
    }

    setUserInfoAction({
      name: username,
      status: userStatus,
    });
    setUsername("");
    setUserStatus("");
  }
  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={(e) => formSubmit(e)}>
        <label>
          Name:
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Status:
          <input
            value={userStatus}
            onChange={(e) => {
              setUserStatus(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfoAction: (data) => dispatch(setUserInfoAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
