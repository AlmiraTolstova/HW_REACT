import { multiplay } from "../../utils/usefullFunctions";

function ShowCalc() {
  console.log(multiplay(2, 4));
  return (
    <div>
      <h2>this is show calc component</h2>
      <p>{multiplay(2, 4) + multiplay(2, 4)}</p>
    </div>
  );
}

export default ShowCalc;
