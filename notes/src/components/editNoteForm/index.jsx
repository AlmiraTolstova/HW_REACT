import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../redux/actions";
import Button from "../ui/button";
import Form from "../ui/form";

function EditNoteForm({ note, setIsEditing }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editNote(note.id, title, text));

    setIsEditing(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <Button type="submit">Save</Button>
      <Button onClick={() => setIsEditing(false)}>Cancel</Button>
    </Form>
  );
}

export default EditNoteForm;
