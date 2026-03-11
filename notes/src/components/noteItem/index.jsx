// import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions";
import { useState } from "react";
import Button from "../ui/button";
import EditNoteForm from "../editNoteForm";

function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  if (edit) {
    return <EditNoteForm note={note} setEdit={edit}></EditNoteForm>;
  }
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NoteItem;
