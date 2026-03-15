import {
  BOOK_ADD,
  BOOK_REMOVE,
  BOOK_TOGGLE_AVAILABILITY,
  BOOK_UPDATE_INFO,
} from "../actions/bookActions";
import {
  READER_ADD,
  READER_REMOVE,
  READER_UPDATE_INFO,
  BOOK_LEND_TO_READER,
  BOOK_RETURN_FROM_READER,
} from "../actions/readersActions";
import books from "../../mockData/BooksArr";
import readers from "../../mockData/mockReaders";
const initialState = {
  books: books,
  lastUpdated: null,
  readers: [readers],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADD: {
      const newBook = {
        id: Date.now() + Math.random(),
        title: action.payload.title,
        author: action.payload.author,
        year: action.payload.year,
        isAvailable: true,
      };

      return {
        ...state,
        books: [...state.books, newBook],
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_REMOVE: {
      const book = state.books.find((b) => b.id === action.payload);

      if (!book || !book.isAvailable) {
        console.log("Книга сейчас выдана — удалять её нельзя!");
        return state;
      }

      return {
        ...state,
        books: state.books.filter((b) => b.id !== action.payload),
        lastUpdated: new Date().toISOString(),
      };
    }
    case BOOK_UPDATE_INFO: {
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id !== action.payload.id) return book;

          return {
            ...book,
            title: action.payload.title ?? book.title,
            author: action.payload.author ?? book.author,
            year: action.payload.year ?? book.year,
          };
        }),
        lastUpdated: new Date().toISOString(),
      };
    }
    case BOOK_TOGGLE_AVAILABILITY: {
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id !== action.payload) return book;

          return {
            ...book,
            isAvailable: !book.isAvailable,
          };
        }),
        lastUpdated: new Date().toISOString(),
      };
    }
    case READER_ADD: {
      const newReader = {
        id: Date.now() + Math.random(),
        name: action.payload.name,
        email: action.payload.email,
        borrowedBooks: [],
        isAvailable: true,
      };

      return {
        ...state,
        readers: [...state.readers, newReader],
      };
    }

    case READER_REMOVE: {
      const reader = state.readers.find((r) => r.id === action.payload);

      if (reader && reader.borrowedBooks.length !== 0) {
        console.log("Можно удалить только если у читателя нет книг!");
        return state;
      }

      return {
        ...state,
        readers: state.readers.filter((r) => r.id !== action.payload),
      };
    }

    case READER_UPDATE_INFO: {
      return {
        ...state,
        readers: state.readers.map((reader) => {
          if (reader.id !== action.payload.id) return reader;

          return {
            ...reader,
            name: action.payload.name ?? reader.name,
            email: action.payload.author ?? reader.email,
          };
        }),
        lastUpdated: new Date().toISOString(),
      };
    }

    default:
      return state;
  }
}
export default booksReducer;
