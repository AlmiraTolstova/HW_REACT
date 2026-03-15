export const BOOK_ADD = "BOOK_ADD";
export const BOOK_REMOVE = "BOOK_REMOVE";
export const BOOK_UPDATE_INFO = "BOOK_UPDATE_INFO";
export const BOOK_TOGGLE_AVAILABILITY = "BOOK_TOGGLE_AVAILABILITY";
export const CALCULATE_STATISTIC = "CALCULATE_STATISTIC";

export const addBook = (book) => ({
  type: BOOK_ADD,
  payload: book,
});

export const removeBook = (id) => ({
  type: BOOK_REMOVE,
  payload: id,
});

export const updateBookInfo = (data) => ({
  type: BOOK_UPDATE_INFO,
  payload: data,
});

export const toggleAvailability = (id) => ({
  type: BOOK_TOGGLE_AVAILABILITY,
  payload: id,
});

export const calculateStatistic = () => ({
  type: CALCULATE_STATISTIC,
});
