import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_NOTE:
      return {
        ...state,
        todos: state.todos.filter((note) => note.id !== action.payload),
      };

    case EDIT_NOTE:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((note) =>
          note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                text: action.payload.text,
              }
            : note,
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
