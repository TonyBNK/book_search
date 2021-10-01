import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import c from './Search.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {BooksStateType, showBooks} from "../../bll/booksReducer";
import {CategoriesFilter} from "./categories-filter/CategoriesFilter";
import {SortingFilter} from "./sorting-filter/SortingFilter";
import {RootStateType} from "../../bll/store";


export const Search = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const {sorting, category} = useSelector<RootStateType, BooksStateType>(
        state => state.books
    );
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }
    const findBooks = () => {
        if (bookTitle.trim()) {
            dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category));
            setBookTitle('');
        } else {
            setError("Title is required!");
        }
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (bookTitle.trim()) {
                dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category));
                setBookTitle('');
            } else {
                setError("Title is required!");
            }
        } else {
            if (error !== null) {
                setError(null);
            }
        }
    };

    return (
        <div className={c.search}>
            <h1>Search for books</h1>
            <div className={c.searchContainer}>
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={bookTitle}
                    onKeyPress={onEnterPressHandler}
                />
                <button onClick={findBooks}>Find</button>
            </div>
            <CategoriesFilter/>
            <SortingFilter/>
        </div>
    )
}