import {applyMiddleware, combineReducers, createStore } from "redux";
import {booksReducer} from "./reducers/booksReducer";
import thunkMiddleware from 'redux-thunk';


export const rootReducer = combineReducers({
    books: booksReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));