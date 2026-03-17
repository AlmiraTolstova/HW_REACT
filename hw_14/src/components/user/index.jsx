import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions/userActions";

function User({ setUserInfoAction, name, status }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name:{name}</p>
      <p>Status:{status}</p>
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
