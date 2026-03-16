import {
  BOOK_ADD,
  BOOK_REMOVE,
  BOOK_TOGGLE_AVAILABILITY,
  BOOK_UPDATE_INFO,
  CALCULATE_STATISTIC,
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

function calculateStatistics(books, readers) {
  const totalBooks = books.length;

  const availableBooks = books.filter((b) => b.isAvailable).length;

  const borrowedBooks = totalBooks - availableBooks;

  const consistencyCheck =
    availableBooks + borrowedBooks === totalBooks ? true : false;

  const booksByDecade = {};

  books.forEach((book) => {
    const decade = Math.floor(book.year / 10) * 10;

    if (!booksByDecade[decade]) {
      booksByDecade[decade] = 0;
    }

    booksByDecade[decade]++;
  });

  const activeReadersCount = readers.filter(
    (reader) => reader.borrowedBooks.length > 0,
  ).length;

  const authors = {};

  books.forEach((book) => {
    if (!authors[book.author]) {
      authors[book.author] = 0;
    }

    authors[book.author]++;
  });

  let mostPopularAuthor = { name: "", booksCount: 0 };

  Object.entries(authors).forEach(([author, count]) => {
    if (count > mostPopularAuthor.booksCount) {
      mostPopularAuthor = {
        name: author,
        booksCount: count,
      };
    }
  });

  return {
    totalBooks,
    availableBooks,
    borrowedBooks,
    booksByDecade,
    activeReadersCount,
    mostPopularAuthor,
    consistencyCheck,
  };
}

const initialState = {
  books: books,
  lastUpdated: null,
  readers: readers,
  statistics: {
    // НОВОЕ ПОЛЕ
    totalBooks: 0, // всего книг
    availableBooks: 0, // доступно сейчас
    borrowedBooks: 0, // выдано всего
    booksByDecade: {
      // книги по десятилетиям
      1950: 0,
      1960: 0,
      1970: 0,
      // и т.д.
    },
    activeReadersCount: 0, // читатели с книгами на руках
    mostPopularAuthor: {
      // самый популярный автор
      name: "",
      booksCount: 0,
    },
    consistencyCheck: false,
  },
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

      const books = [...state.books, newBook];

      const statistics = calculateStatistics(books, state.readers);

      return {
        ...state,
        books: [...state.books, newBook],
        statistics: statistics,
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_REMOVE: {
      const book = state.books.find((b) => b.id === action.payload);

      if (!book || !book.isAvailable) {
        console.log("Книга сейчас выдана — удалять её нельзя!");
        return state;
      }

      const books = state.books.filter((book) => book.id !== action.payload);

      const statistics = calculateStatistics(books, state.readers);

      return {
        ...state,
        books: state.books.filter((b) => b.id !== action.payload),
        statistics: statistics,
        lastUpdated: new Date().toISOString(),
      };
    }
    case BOOK_UPDATE_INFO: {
      const books = state.books.map((book) => {
        if (book.id !== action.payload.id) return book;

        return {
          ...book,
          title: action.payload.title ?? book.title,
          author: action.payload.author ?? book.author,
          year: action.payload.year ?? book.year,
        };
      });

      const statistics = calculateStatistics(books, state.readers);

      return {
        ...state,
        books,
        statistics,
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

    case CALCULATE_STATISTIC: {
      const statistics = calculateStatistics(state.books, state.readers);

      return {
        ...state,
        statistics: statistics,
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
      };
    }

    case BOOK_LEND_TO_READER: {
      console.log(action.payload);
      const book = state.books.find((b) => b.id === action.payload.bookId);

      const reader = state.readers.find(
        (r) => String(r.id) === action.payload.readerId,
      );

      if (!book) {
        console.log("Book not found");
        return state;
      }

      if (!reader) {
        console.log("Reader not found");
        return state;
      }

      if (!book.isAvailable) {
        console.log("Book is not available");
        return state;
      }

      const books = state.books.map((book) =>
        book.id === action.payload.bookId
          ? { ...book, isAvailable: false }
          : book,
      );

      const readers = state.readers.map((reader) =>
        reader.id === action.payload.readerId
          ? {
              ...reader,
              borrowedBooks: [...reader.borrowedBooks, action.payload.bookId],
            }
          : reader,
      );

      const statistics = calculateStatistics(books, readers);

      return {
        ...state,

        books: state.books.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, isAvailable: false }
            : book,
        ),

        readers: state.readers.map((reader) =>
          String(reader.id) === action.payload.readerId
            ? {
                ...reader,
                borrowedBooks: [...reader.borrowedBooks, action.payload.bookId],
              }
            : reader,
        ),
        statistics: statistics,
      };
    }

    case BOOK_RETURN_FROM_READER: {
      const reader = state.readers.find(
        (r) => r.id === action.payload.readerId,
      );

      let reader_book = undefined;
      if (reader) {
        reader_book = reader.borrowedBooks.find(
          (b) => b === action.payload.bookId,
        );
      }

      if (!reader_book) {
        console.log("Book not found");
        return state;
      }

      const books = state.books.map((book) =>
        book.id === action.payload.bookId
          ? { ...book, isAvailable: true }
          : book,
      );

      const readers = state.readers.map((reader) =>
        reader.id === action.payload.readerId
          ? {
              ...reader,
              borrowedBooks: reader.borrowedBooks.filter(
                (id) => id !== action.payload.bookId,
              ),
            }
          : reader,
      );

      const statistics = calculateStatistics(books, readers);

      return {
        ...state,

        books: state.books.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, isAvailable: true }
            : book,
        ),

        readers: state.readers.map((reader) =>
          reader.id === action.payload.readerId
            ? {
                ...reader,
                borrowedBooks: reader.borrowedBooks.filter(
                  (item) => item !== action.payload.bookId,
                ),
              }
            : reader,
        ),

        statistics: statistics,
      };
    }

    default:
      return state;
  }
}
export default booksReducer;
