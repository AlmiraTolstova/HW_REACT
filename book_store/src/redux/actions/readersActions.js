export const READER_ADD = "READER_ADD";
export const READER_REMOVE = "READER_REMOVE";
export const READER_UPDATE_INFO = "READER_UPDATE_INFO";
export const BOOK_LEND_TO_READER = "BOOK_LEND_TO_READER";
export const BOOK_RETURN_FROM_READER = "BOOK_RETURN_FROM_READER";

export const addReader = (data) => ({
  type: READER_ADD,
  payload: data,
});

export const removeReader = (id) => ({
  type: READER_REMOVE,
  payload: id,
});

export const updateReaderInfo = (data) => ({
  type: READER_UPDATE_INFO,
  payload: data,
});

export const bookLendToReader = (data) => ({
  type: BOOK_LEND_TO_READER,
  payload: data,
});

export const bookReturnFromReader = (data) => ({
  type: BOOK_RETURN_FROM_READER,
  payload: data,
});
