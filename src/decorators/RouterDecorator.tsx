import {combineReducers, createStore} from "redux";
import {booksReducer} from "../bll/reducers/booksReducer";
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "../types/types";


const rootReducer = combineReducers({
    books: booksReducer
});

const initialState = {}

export const storyBookStore = createStore(rootReducer, initialState as RootStateType);

export const RouterDecorator = (storyFn: any) => {
    return <BrowserRouter>{storyFn()}</BrowserRouter>
}