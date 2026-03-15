import { connect, useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/bookActions";
import { useState } from "react";
import { Modal } from "antd";

function Toolbar({ addBook }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const showModal = () => {
    console.log("showModal");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    addBook({
      title: title,
      author: author,
      year: Number(year),
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>Add book</button>

      <Modal
        title="Add book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />

        <input
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    books: state.books,
    lastUpdated: state.lastUpdated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (data) => dispatch(addBook(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
