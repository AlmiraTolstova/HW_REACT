import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../redux/slices/questionnaireSlice";
import styles from "./styles.module.css";

function Question({ question }) {
  const dispatch = useDispatch();

  const submitted = useSelector((state) => state.questionnaire.submitted);

  const currentAnswer = useSelector(
    (state) =>
      state.questionnaire.questions.find((q) => q.id === question.id)?.answer,
  );

  function handleChange(option) {
    dispatch(answerQuestion({ id: question.id, answer: option }));
  }

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>

      {question.options.map(function (option, index) {
        return (
          <label key={index}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={currentAnswer === option}
              onChange={() => handleChange(option)}
              disabled={submitted} // 👈 ВСТАВИТЬ
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}

export default Question;
