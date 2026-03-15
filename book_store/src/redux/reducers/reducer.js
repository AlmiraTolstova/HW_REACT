import {
  BOOK_ADD,
  BOOK_REMOVE,
  BOOK_TOGGLE_AVAILABILITY,
  BOOK_UPDATE_INFO,
} from "../actions/bookActions";

const initialState = {
  books: [
    {
      id: 1,
      title: "Harry Potter",
      author: "J. K. Rowling",
      year: 1967,
      isAvailable: true,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      isAvailable: true,
    },
  ],
  lastUpdated: null,
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
    default:
      return state;
  }
}
export default booksReducer;
