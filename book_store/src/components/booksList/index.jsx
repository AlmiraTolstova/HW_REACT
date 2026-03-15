import { Flex, Space, Table, Tag, Modal } from "antd";

import { connect, useDispatch } from "react-redux";
import {
  removeBook,
  toggleAvailability,
  updateBookInfo,
} from "../../redux/actions/bookActions";
import { useState } from "react";

function BooksList({
  books,
  lastUpdated,
  removeBook,
  updateBookInfo,
  toggleAvailability,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  const setModalData = (data) => {
    setIsModalOpen(true);
    if (data) {
      setTitle(data.title);
      setAuthor(data.author);
      setYear(data.year);
      setId(data.id);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateBookInfo({
      id: id,
      title: title,
      author: author,
      year: year,
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Availablity",
      key: "isAvailable",
      dataIndex: "isAvailable",
      render: (_, record) => (
        <Space size="medium">
          {console.log(record)}
          <Tag color={record.isAvailable ? "green" : "red"}>
            {record.isAvailable ? "Available" : "Unavailable"}
          </Tag>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="medium">
          <button onClick={() => toggleAvailability(record.id)}>
            To lend {record.title}
          </button>
          <button
            onClick={() => removeBook(record.id)}
            disabled={record.isAvailable ? false : true}
          >
            Delete
          </button>
          <button onClick={() => setModalData(record)}>Edit </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={books} rowKey="id" />
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>
        <input
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          value={author}
        ></input>
        <input
          onChange={(e) => {
            setYear(e.target.value);
          }}
          value={year}
        ></input>
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
    removeBook: (data) => dispatch(removeBook(data)),
    updateBookInfo: (data) => dispatch(updateBookInfo(data)),
    toggleAvailability: (data) => dispatch(toggleAvailability(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
