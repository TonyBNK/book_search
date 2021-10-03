import c from "./MoreResults.module.scss";
import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {
    BooksDispatchType,
    CommonSearchType
} from "../../types/types";
import {showBooks} from "../../bll/thunks/thunks";


export const MoreResults = () => {
    const {
        searchStr,
        currentPage,
        sorting,
        category,
        isButtonShown,
        extraBooks
    } = useSelector<RootStateType, CommonSearchType>(
        state => state.books.commonSearch
    );

    const dispatch = useDispatch<Dispatch<BooksDispatchType>>();

    const showMore = () => {
        dispatch(showBooks(searchStr, currentPage + 30, false, sorting, category, extraBooks));
    }

    return (
        <div className={c.moreResults}>
            {
                isButtonShown
                    ? <button onClick={showMore}>
                        Show more
                    </button>
                    : ''
            }

        </div>
    )
}