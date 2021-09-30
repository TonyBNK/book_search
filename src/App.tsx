import React, {ChangeEvent, useState} from 'react';
import c from './App.module.css';
import {searchAPI} from "./api/api";

function App() {
    const [bookTitle, setBookTitle] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [images, setImages] = useState([]);
    let booksImages: Array<string>;


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }
    const findBook = () => {
        searchAPI
            .getBooks(bookTitle)
            .then(response => {
                console.log(response);
                // 1. titles
                const booksTitles = response.data.items.map((item: any) => item.volumeInfo.title);

                // 2. images
                setImages(response.data.items.map((item: any) => item.volumeInfo.imageLinks.thumbnail !== undefined
                    ? item.volumeInfo.imageLinks.thumbnail : ''));
                setSearchResult(booksImages.join(`, `))
            })
            .catch(err => console.log('error ', err));
    }

    const imagesForResult = images.map((image: string) =>
        <img
            src={image}
            alt=""/>
    )

    return (
        <div className={c.App}>
            <div className={c.search}>
                Search for books
                <div className={c.searchContainer}>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={bookTitle}
                    />
                    <button onClick={findBook}>Find</button>
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
            <div className={c.searchResult}>
                {/*{searchResult}*/}
                {imagesForResult}
            </div>
        </div>
    );
}

export default App;
