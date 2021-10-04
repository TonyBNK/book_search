import c from "./MoreResults.module.scss";
import React, {Dispatch, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {
    BooksDispatchType,
    CommonSearchType
} from "../../types/types";
import {showBooks} from "../../bll/thunks/thunks";


export const MoreResults = React.memo(() => {
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

    const showMore = useCallback(() => {
        dispatch(showBooks(searchStr, currentPage + 30, false, sorting, category, extraBooks));
    }, [dispatch, category, currentPage, extraBooks, searchStr, sorting]);

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
});