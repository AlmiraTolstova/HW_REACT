import { connect } from "react-redux";
import { setFilterAction } from "../../redux/actions/action";

function Filter({ filterString, setFilter }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filterString}
      ></input>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filterString: state.filterString,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => dispatch(setFilterAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
