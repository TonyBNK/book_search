import {combineReducers, createStore} from "redux";
import {booksReducer} from "../bll/reducers/booksReducer";
import {RootStateType} from "../bll/store";
import {BrowserRouter} from "react-router-dom";


const rootReducer = combineReducers({
    books: booksReducer
});

const initialState = {}

export const storyBookStore = createStore(rootReducer, initialState as RootStateType);

export const RouterDecorator = (storyFn: any) => {
    return <BrowserRouter>{storyFn()}</BrowserRouter>
}