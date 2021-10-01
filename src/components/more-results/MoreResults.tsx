import c from "./MoreResults.module.scss";
import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    BooksDispatchType,
    BooksStateType,
    showBooks
} from "../../bll/booksReducer";
import {RootStateType} from "../../bll/store";


export const MoreResults = () => {
    const {
        searchStr,
        currentPage,
        sorting,
        category,
        isShown
    } = useSelector<RootStateType, BooksStateType>(
        state => state.books
    );

    const dispatch = useDispatch<Dispatch<BooksDispatchType>>();

    const showMore = () => {
        dispatch(showBooks(searchStr, currentPage + 30, false, sorting, category));
    }

    return (
        <div className={c.moreResults}>
            {
                isShown
                    ? <button onClick={showMore}>
                        Show more
                    </button>
                    : ''
            }

        </div>
    )
}