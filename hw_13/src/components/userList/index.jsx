import { connect } from "react-redux";
import { setFilterAction } from "../../redux/actions/action";
import UserItem from "../userItem";

function UserList({ filteredUsersList }) {
  return (
    <div>
      {filteredUsersList.map((item, index) => {
        return <UserItem key={index} name={item}></UserItem>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filterString: state.filterString,
    filteredUsersList: state.filteredUsersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => dispatch(setFilterAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
