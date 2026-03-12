import NoteForm from "../noteForm";
import NoteList from "../noteList";
import styles from "./styles.module.css";

function Main() {
  return (
    <main>
      <NoteForm></NoteForm>
      <NoteList></NoteList>
    </main>
  );
}

export default Main;
