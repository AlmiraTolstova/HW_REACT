// import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions";

function NoteForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !text) return;

    const newNote = {
      id: Date.now(),
      title,
      text,
    };

    dispatch(addNote(newNote));

    setTitle("");
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button>Add Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
