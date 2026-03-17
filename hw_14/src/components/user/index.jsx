import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions/userActions";

function User({ setUserInfoAction, name, status }) {
  return <div></div>;
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
