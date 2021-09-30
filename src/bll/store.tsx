import { combineReducers, createStore } from "redux";
import {booksReducer} from "./booksReducer";


const rootReducer = combineReducers({
    books: booksReducer
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;