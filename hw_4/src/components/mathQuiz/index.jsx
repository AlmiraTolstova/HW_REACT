import { useState } from "react";
import Answer from "../answer";

const getRandom = () => {
  return Math.round(Math.random() * 100);
};

function MathQuiz() {
  const [points, setPoints] = useState(0);
  const [x, setX] = useState(getRandom());
  const [y, setY] = useState(getRandom());
  const [reaction, setReaction] = useState("😲");
  console.log(x, y);

  function updatePoints(x, y, resultFromUser) {
    console.log(x, y, x + y);

    if (x + y == resultFromUser) {
      setPoints(points + 1);
      setX(getRandom());
      setY(getRandom());
      setReaction("🤓");
    } else {
      setPoints(points - 1);
      setReaction("😱");
    }
  }

  return (
    <div>
      <p>Points: {points}</p>
      <p>{reaction}</p>
      <p>
        {x}+{y}=?{" "}
      </p>
      <Answer x={x} y={y} updatePoints={updatePoints}></Answer>
    </div>
  );
}

export default MathQuiz;
