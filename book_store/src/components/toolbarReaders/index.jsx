import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import { addReader } from "../../redux/actions/readersActions";

function ToolbarReaders({ addReader }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    addReader({
      name: name,
      email: email,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>Add reader</button>

      <Modal
        title="Add reader"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          placeholder="Title"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    readers: state.readers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReader: (data) => dispatch(addReader(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarReaders);
