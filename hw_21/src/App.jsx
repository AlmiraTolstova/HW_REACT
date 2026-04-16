import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/question";
import Result from "./components/result";
import { submitAnswers } from "./redux/slices/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const submitted = useSelector((state) => state.questionnaire.submitted);
  const allAnswered = questions.every((q) => q.answer !== null);

  function handleSubmit() {
    dispatch(submitAnswers());
  }

  return (
    <div>
      <h1>Questionnaire</h1>

      {questions.map(function (q) {
        return <Question key={q.id} question={q} />;
      })}

      <button
        className="button"
        onClick={handleSubmit}
        disabled={!allAnswered || submitted} // 👈 ВСТАВИТЬ
      >
        Submit
      </button>

      <Result />
    </div>
  );
}

export default App;
