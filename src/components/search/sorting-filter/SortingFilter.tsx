import React, {ChangeEvent} from "react";
import c from './SortingFilter.module.scss';
import {setSorting} from "../../../bll/booksReducer";
import {useDispatch} from "react-redux";


export const SortingFilter = () => {
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSorting(e.currentTarget.value));
    }

    return (
        <div className={c.sortingFilter}>
            <select onChange={onChangeHandler}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    )
}