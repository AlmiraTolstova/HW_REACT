import { Flex, Space, Table, Tag, Modal } from "antd";

import { connect, useDispatch } from "react-redux";
import {
  calculateStatistic,
  removeBook,
  toggleAvailability,
  updateBookInfo,
} from "../../redux/actions/bookActions";
import { useEffect, useState } from "react";
import { bookLendToReader } from "../../redux/actions/readersActions";

function BooksList({
  books,
  readers,
  lastUpdated,
  removeBook,
  updateBookInfo,
  toggleAvailability,
  bookLendToReader,
  calculateStatistic,
}) {
  useEffect(() => {
    calculateStatistic();
  }, [calculateStatistic]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLend, setIsModalLend] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  const [bookId, setBookId] = useState("");
  // проверяем, если список читателей не пустой, то по умолчанию
  // выбираем первого читателя как значение по умолчанию
  const [readerId, setReaderId] = useState(
    readers.length === 0 ? "" : readers[0].id,
  );

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

  const showModalLend = (bookId) => {
    setBookId(bookId);
    setIsModalLend(true);
  };

  const handleLendOk = () => {
    setIsModalLend(false);
    bookLendToReader({ bookId: bookId, readerId: readerId });
  };
  const handleLendCancel = () => {
    setIsModalLend(false);
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
          <button onClick={() => showModalLend(record.id)}>To lend</button>
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

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalLend}
        onOk={handleLendOk}
        onCancel={handleLendCancel}
      >
        <div>
          <p>Select reader:</p>
          <select onChange={(e) => setReaderId(e.target.value)}>
            {readers.map((reader) => {
              return (
                <option key={reader.id} value={reader.id}>
                  {reader.name}
                </option>
              );
            })}
          </select>
        </div>
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
    removeBook: (data) => dispatch(removeBook(data)),
    updateBookInfo: (data) => dispatch(updateBookInfo(data)),
    toggleAvailability: (data) => dispatch(toggleAvailability(data)),
    bookLendToReader: (data) => dispatch(bookLendToReader(data)),
    calculateStatistic: () => dispatch(calculateStatistic()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
