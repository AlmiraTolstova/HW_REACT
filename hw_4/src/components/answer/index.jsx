import { useState } from "react";

function Answer({ x, y, updatePoints }) {
  const [resultFromUser, setResultFromUser] = useState(0);
  const onHandleChange = (event) => {
    setResultFromUser(event.target.value);
  };
  return (
    <div>
      <label>
        {" "}
        Result=
        <input
          type="number"
          value={resultFromUser}
          onChange={onHandleChange}
        ></input>
      </label>
      <button
        onClick={() => {
          updatePoints(x, y, resultFromUser);
        }}
      >
        Check result
      </button>
    </div>
  );
}

export default Answer;
