const initialState = {
  name: "",
  status: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO": {
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
