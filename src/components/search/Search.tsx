import React, {ChangeEvent, useState} from "react";
import c from './Search.module.scss';
import {useDispatch} from "react-redux";
import {showMoreBooks} from "../../bll/booksReducer";


export const Search = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [images, setImages] = useState([]);
    const [searchResult, setSearchResult] = useState('');

    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }
    const findBooks = () => {
        dispatch(showMoreBooks(bookTitle))
    }

    return(
        <div className={c.search}>
            Search for books
            <div className={c.searchContainer}>
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={bookTitle}
                />
                <button onClick={findBooks}>Find</button>
            </div>
            <div className={c.categoriesFilter}>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
            <div className={c.sortingFilter}>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
        </div>
    )
}