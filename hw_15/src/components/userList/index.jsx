function UserList({ userArr }) {
  return (
    <div>
      {userArr.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
