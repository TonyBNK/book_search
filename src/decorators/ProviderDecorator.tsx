import {applyMiddleware, combineReducers, createStore} from "redux";
import {booksReducer} from "../bll/reducers/booksReducer";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {RootStateType} from "../types/types";


const rootReducer = combineReducers({
    books: booksReducer
});

const initialState = {}

export const storyBookStore = createStore(rootReducer, initialState as RootStateType, applyMiddleware(thunkMiddleware));

export const ProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}