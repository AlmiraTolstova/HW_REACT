import Text from "../text";
import Lists from "../lists";
import Pictures from "../pictures";
import LinkButton from "../linkButton";

function MainContext() {
  return (
    <div>
      <Text></Text>
      <Lists />
      <Pictures />
      <LinkButton />
    </div>
  );
}

export default MainContext;
