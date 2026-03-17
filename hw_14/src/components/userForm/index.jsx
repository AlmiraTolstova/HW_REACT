import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions/userActions";
import styles from "./styles.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.title}>Edit User Information</h2>
      <form onSubmit={(e) => formSubmit(e)}>
        <div className={styles.formGroup}>
          <label>
            Name:
            <input
              className={styles.input}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Status:
            <input
              className={styles.input}
              value={userStatus}
              onChange={(e) => {
                setUserStatus(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <button className={styles.button} type="submit">
          Save
        </button>
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
