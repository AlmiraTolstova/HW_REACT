// import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions";

function NoteItem({ note }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NoteItem;
