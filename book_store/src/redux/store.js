import { createStore } from "redux";
import booksReducer from "./reducers/reducer";

const store = createStore(booksReducer);

export default store;
