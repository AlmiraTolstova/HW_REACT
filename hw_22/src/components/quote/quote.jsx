import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../../redux/slices/quoteSlice";
import styles from "./styles.module.css";

function Quote() {
  const dispatch = useDispatch();

  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.card}>
      <h2>Random Quote</h2>

      {status === "loading" && <p>Loading...</p>}

      {status === "failed" && <p className={styles.error}>{error}</p>}

      {status === "succeeded" && (
        <>
          <p className={styles.quote}>"{quote}"</p>

          <p className={styles.author}>— {author}</p>
        </>
      )}

      <button onClick={handleNewQuote} className={styles.button}>
        New Quote
      </button>
    </div>
  );
}

export default Quote;
