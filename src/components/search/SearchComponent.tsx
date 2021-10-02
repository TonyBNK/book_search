import React, {ChangeEvent, useState, KeyboardEvent, Dispatch} from "react";
import c from './SearchComponent.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {showBooks} from "../../bll/booksReducer";
import {CategoriesFilter} from "./categories-filter/CategoriesFilter";
import {SortingFilter} from "./sorting-filter/SortingFilter";
import {RootStateType} from "../../bll/store";
import {IconButton, TextField} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import titleImg from '../../images/book-dark-enlightenment-1029141-1024x683.jpg';
import {BooksDispatchType, BooksStateType} from "../../types/types";


export const SearchComponent = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const {
        sorting,
        category,
        extraBooks
    } = useSelector<RootStateType, BooksStateType>(
        state => state.books
    );
    const dispatch = useDispatch<Dispatch<BooksDispatchType>>();
    const titleImage = {
      backgroundImage: `url(${titleImg})`
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }
    const findBooks = () => {
        if (bookTitle.trim()) {
            dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category, extraBooks));
            setBookTitle('');
        } else {
            setError("Title is required!");
        }
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (bookTitle.trim()) {
                dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category, extraBooks));
                setBookTitle('');
            } else {
                setError("Title is required!");
            }
        } else {
            if (error !== null) {
                setError(null);
            }
        }
    }

    return (
        <div className={c.searchComponent} style={titleImage}>
            <h1>Search for books</h1>
            <div className={c.searchContainer}>
                <TextField
                    onChange={onChangeHandler}
                    value={bookTitle}
                    onKeyPress={onEnterPressHandler}
                    error={!!error}
                    label={!!error ? error : "Type book's title..."}
                    variant={'standard'}
                    color={'success'}
                    autoFocus
                />
                <IconButton onClick={findBooks}>
                    <Search
                        fontSize={'large'}
                        className={c.searchButton}
                    />
                </IconButton>
            </div>
            <div className={c.filterContainer}>
                <CategoriesFilter/>
                <SortingFilter/>
            </div>
        </div>
    )
}