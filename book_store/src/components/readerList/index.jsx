import { Flex, Space, Table, Tag, Modal, Popconfirm } from "antd";

import { connect } from "react-redux";

import { useState } from "react";
import {
  bookLendToReader,
  bookReturnFromReader,
  removeReader,
  updateReaderInfo,
} from "../../redux/actions/readersActions";

function ReadersList({
  readers,
  books,
  removeReader,
  updateReaderInfo,
  bookReturnFromReader,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const setModalData = (data) => {
    setIsModalOpen(true);
    if (data) {
      setName(data.name);
      setEmail(data.email);
      setId(data.id);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateReaderInfo({
      id: id,
      name: name,
      email: email,
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Borrowed books",
      key: "borrowedBooks",
      dataIndex: "borrowedBooks",
      render: (_, record) => (
        <Flex gap="small" align="center" wrap>
          {record.borrowedBooks.map((bookId) => {
            const book = books.find((b) => b.id === bookId);

            return (
              <div key={bookId} style={{ display: "flex" }}>
                <p>{book ? book.title : "Unknown book"}</p>
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() =>
                    bookReturnFromReader({
                      bookId: bookId,
                      readerId: record.id,
                    })
                  }
                >
                  <a style={{ marginRight: "20px" }}>- Return book</a>
                </Popconfirm>
              </div>
            );
          })}
        </Flex>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="medium">
          <button
            disabled={record.borrowedBooks.length !== 0}
            onClick={() => removeReader(record.id)}
          >
            Remove {record.title}
          </button>
          {/* <button
            onClick={() => removeReader(record.id)}
            disabled={record.isAvailable ? false : true}
          >
            Delete
          </button>
          <button onClick={() => setModalData(record)}>Edit </button> */}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={readers} rowKey="id" />
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    readers: state.readers,
    lastUpdated: state.lastUpdated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeReader: (data) => dispatch(removeReader(data)),
    updateReaderInfo: (data) => dispatch(updateReaderInfo(data)),
    bookLendToReader: (data) => dispatch(bookLendToReader(data)),
    bookReturnFromReader: (data) => dispatch(bookReturnFromReader(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadersList);
