import ReaderList from "../../components/readerList";
import ToolbarReaders from "../../components/toolbarReaders";

function Readers() {
  return (
    <div>
      <h2>Readers list</h2>
      <ToolbarReaders></ToolbarReaders>
      <ReaderList></ReaderList>
    </div>
  );
}

export default Readers;
