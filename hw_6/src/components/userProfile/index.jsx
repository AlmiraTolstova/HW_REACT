import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://randomuser.me/api/0.8/?results=1";

function UserProfile() {
  const [user, setUser] = useState();
  const [statusLoading, setStatusLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      setStatusLoading(true);
      const response = await axios.get(BASE_URL);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setStatusLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {statusLoading || !user ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <>
            <img
              className={styles.avatar}
              src={user.results[0].user.picture.large}
              alt="User avatar"
            />
            <h1 className={styles.name}>
              {user.results[0].user.name.first} {user.results[0].user.name.last}
            </h1>
            <p className={styles.email}>Email: {user.results[0].user.email}</p>
            <p className={styles.email}>Phone: {user.results[0].user.phone}</p>
          </>
        )}

        <button
          className={styles.button}
          onClick={fetchUser}
          disabled={statusLoading}
        >
          Load New User
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
