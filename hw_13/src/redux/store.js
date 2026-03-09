import { createStore } from "redux";
import usersReducer from "./reducers/reducer";

const store = createStore(usersReducer);

export default store;
