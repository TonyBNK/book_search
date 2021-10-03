import {applyMiddleware, combineReducers, createStore } from "redux";
import {booksReducer} from "./reducers/booksReducer";
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    books: booksReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>;