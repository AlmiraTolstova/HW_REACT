const initialState = {
  count: 0,
  userList: [
    "Luke Skywalker",
    "Han Solo",
    "Leia Organa",
    "Darth Vader",
    "Obi-Wan Kenobi",
    "C-3PO",
    "R2-D2",
    "Chewbacca",
    "Wilhuff Tarkin",
    "Owen Lars",
    "Beru Lars",
    "Greedo",
    "Wedge Antilles",
    "Biggs Darklighter",
    "Jabba the Hutt",
    "Cassio Tagge",
    "Conan Antonio Motti",
    "Jan Dodonna",
    "Raymus Antilles",
    "Garindan",
  ],
  filterString: "",
  filteredUsersList: [],
};

const usersReducer = (state = initialState, action) => {
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

export default usersReducer;
