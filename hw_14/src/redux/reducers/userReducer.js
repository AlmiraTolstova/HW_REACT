const initialState = {
  name: "",
  status: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      let tempList = [];
      if (state.filterString === "") {
        tempList = [];
      }
      tempList = state.userList.filter((item) =>
        item.includes(state.filterString),
      );
      return {
        ...state,
        filterString: action.payload,
        filteredUsersList: tempList,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
