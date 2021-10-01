import c from "./MoreResults.module.scss";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {BooksStateType, showBooks} from "../../bll/booksReducer";
import {RootStateType} from "../../bll/store";


export const MoreResults = () => {
    const {
        searchStr,
        currentPage,
        sorting,
        category
    } = useSelector<RootStateType, BooksStateType>(
        state => state.books
    );

    const dispatch = useDispatch();

    const showMore = () => {
        dispatch(showBooks(searchStr, currentPage + 30, false, sorting, category));
    }

    return (
        <div className={c.moreResults}>
            <button onClick={showMore}>
                Show more
            </button>
        </div>
    )
}