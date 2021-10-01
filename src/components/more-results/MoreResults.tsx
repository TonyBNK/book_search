import c from "./MoreResults.module.scss";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {showBooks} from "../../bll/booksReducer";
import {RootStateType} from "../../bll/store";


export const MoreResults = () => {
    const searchStr = useSelector<RootStateType, string>(
        state => state.books.searchStr
    );
    const currentPage = useSelector<RootStateType, number>(
        state => state.books.currentPage
    );
    const dispatch = useDispatch();

    const showMore = () => {
        dispatch(showBooks(searchStr, currentPage + 30, false));
    }

    return (
        <div className={c.moreResults}>
            <button onClick={showMore}>
                Show more
            </button>
        </div>
    )
}