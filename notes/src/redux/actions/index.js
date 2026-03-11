export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

export const addNote = (title, text) => ({
  type: ADD_NOTE,
  payload: {
    id: Date.now(),
    title,
    text,
  },
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const editNote = (id, title, text) => ({
  type: EDIT_NOTE,
  payload: { id, title, text },
});
