import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions/userActions";
import styles from "./styles.module.css";

function User({ setUserInfoAction, name, status }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Information</h2>
      <p className={styles.text}>Name:{name}</p>
      <p className={styles.text}>Status:{status}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
