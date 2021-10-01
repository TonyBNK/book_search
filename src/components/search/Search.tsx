import React, {ChangeEvent, useState} from "react";
import c from './Search.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {showBooks} from "../../bll/booksReducer";
import {CategoriesFilter} from "./categories-filter/CategoriesFilter";
import {SortingFilter} from "./sorting-filter/SortingFilter";
import {RootStateType} from "../../bll/store";


export const Search = () => {
    const [bookTitle, setBookTitle] = useState('');
    const sorting = useSelector<RootStateType, string>(
        state => state.books.sorting
    )
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }
    const findBooks = () => {
        dispatch(showBooks(bookTitle, 0, true, sorting));
        setBookTitle('');
    }

    return (
        <div className={c.search}>
            <h1>Search for books</h1>
            <div className={c.searchContainer}>
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={bookTitle}
                />
                <button onClick={findBooks}>Find</button>
            </div>
            <CategoriesFilter/>
            <SortingFilter/>
        </div>
    )
}