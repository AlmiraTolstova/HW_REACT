import { Flex, Space, Table, Tag } from "antd";
import { connect, useDispatch } from "react-redux";
import {
  removeBook,
  toggleAvailability,
  updateBookInfo,
} from "../../redux/actions/bookActions";

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
    render: (_, { record }) => (
      <Space size="medium">
        <p>{record.name}</p>
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="medium">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["kawaii"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function BooksList({
  books,
  lastUpdated,
  removeBook,
  updateBookInfo,
  toggleAvailability,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Books list</h2>
      <Table columns={columns} dataSource={books} />
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
