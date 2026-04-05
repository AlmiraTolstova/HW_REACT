import styles from "./styles.module.css";

function UserList({ userArr }) {
  return (
    <div className={styles.userList}>
      {userArr.map((item) => {
        return (
          <div className={styles.userCard} key={item.id}>
            <p className={styles.userName}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
